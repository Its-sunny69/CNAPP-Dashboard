import Navbar from "../components/Navbar";
import CardSection from "../components/CardSection";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Dashboard() {
  const { dashboardData } = useDashboardContext();
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState<{ id: string } | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    dashboardData?.categories[0].id || null,
  );
  const [uncheckedWidgets, setUncheckedWidgets] = useState<string[]>([]);
  const ref = useOutsideClick(() => {
    setIsAddWidgetOpen(false);
    setIsFormOpen(null);
  });

  const handleCategorySelect = (id: string) => {
    setSelectedCategoryId(id);
    setIsFormOpen(null);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (!checked) {
      setUncheckedWidgets((prev) => [...prev, value]);
    } else {
      setUncheckedWidgets((prev) => prev.filter((id) => id !== value));
    }
  };

  const handleConfirm = () => {
    setIsAddWidgetOpen(false);
    setIsFormOpen(null);
  };

  useEffect(() => {
    if (isAddWidgetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAddWidgetOpen]);

  return (
    <main className="relative z-0 min-h-screen bg-[#f0f5fa]">
      <Navbar />

      <section className="p-4 md:p-10">
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-lg font-extrabold">CNAPP Dashboard</h1>

          <button
            className="flex items-center justify-center rounded-md border-2 border-gray-200 bg-white p-2 text-xs font-semibold text-gray-600 hover:cursor-pointer hover:bg-gray-50"
            onClick={() => setIsAddWidgetOpen(true)}
          >
            Add Widget
            <AddRoundedIcon className="ml-1" style={{ fontSize: "16px" }} />
          </button>
        </div>

        {dashboardData && dashboardData.categories.length > 0 ? (
          dashboardData.categories.map((category) => (
            <CardSection
              key={category.id}
              data={category}
              setIsAddWidgetOpen={setIsAddWidgetOpen}
              setSelectedCategoryId={setSelectedCategoryId}
              uncheckedWidgets={uncheckedWidgets}
            />
          ))
        ) : (
          <p>No dashboard data available.</p>
        )}

        {isAddWidgetOpen && (
          <section className="animate-fade animate-duration-300 fixed inset-0 z-10 flex h-screen flex-col items-end bg-gray-500/50">
            <div
              className="flex h-svh min-w-[40%] flex-col justify-between overflow-y-auto bg-white"
              ref={ref}
            >
              <div>
                <div className="flex w-full items-center justify-between border-b bg-[#14147d] px-4 py-2 text-white">
                  <p>Add widget</p>

                  <button
                    onClick={() => setIsAddWidgetOpen(false)}
                    className="cursor-pointer hover:opacity-80"
                  >
                    <CloseRoundedIcon />
                  </button>
                </div>

                {dashboardData && selectedCategoryId && (
                  <div className="p-4">
                    <p>
                      Personalise your dashboard by adding the following widget
                    </p>

                    <nav className="mt-2 mb-4 text-sm">
                      <ul className="flex">
                        {dashboardData?.categories.map((category) => (
                          <li
                            key={category.id}
                            className={`cursor-pointer border-b-3 px-6 py-2 ${
                              selectedCategoryId === category.id
                                ? "border-[#14147d] text-[#14147d]"
                                : "border-gray-200 text-gray-400"
                            } font-bold transition-all hover:bg-gray-100`}
                            onClick={() => handleCategorySelect(category.id)}
                          >
                            {category.name.split(" ")[0]}
                          </li>
                        ))}
                      </ul>
                    </nav>

                    <div className="px-2 text-sm">
                      <ul>
                        {selectedCategoryId &&
                          dashboardData?.categories
                            .find((cat) => cat.id === selectedCategoryId)
                            ?.widgets.map((widget) => (
                              <li
                                key={widget.id}
                                className="my-1 flex items-center justify-start rounded-md border border-gray-200 px-2 hover:bg-gray-100"
                              >
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 cursor-pointer"
                                  id={widget.name}
                                  name={widget.name}
                                  checked={
                                    !uncheckedWidgets.includes(widget.id)
                                  }
                                  value={widget.id}
                                  onChange={handleCheckboxChange}
                                />{" "}
                                <label
                                  htmlFor={widget.name}
                                  className="ml-3 w-full cursor-pointer py-2"
                                >
                                  {widget.name}
                                </label>
                              </li>
                            ))}
                      </ul>

                      <button
                        className="my-1 flex w-full items-center justify-start rounded-md border border-gray-200 p-2 text-sm font-semibold text-gray-600 hover:cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                          setIsFormOpen({ id: selectedCategoryId })
                        }
                      >
                        <AddRoundedIcon fontSize="small" className="mr-3" />
                        Add Widget in{" "}
                        {
                          dashboardData.categories
                            .find((cat) => cat.id === selectedCategoryId)
                            ?.name.split(" ")[0]
                        }
                      </button>
                    </div>

                    {isFormOpen && (
                      <div className="px-2">
                        <Form
                          setIsFormOpen={setIsFormOpen}
                          isFormOpen={isFormOpen}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end">
                <button
                  className="m-4 cursor-pointer rounded-md border bg-[#14147d] px-4 py-2 text-sm text-white hover:opacity-80"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

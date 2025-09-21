import { useState } from "react";
import { useDashboardContext } from "../hooks/useDashboardContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

type FormData = {
  categoryId: string;
  id: string;
  name: string;
  description: string;
};

export default function Form({
  setIsFormOpen,
  isFormOpen,
}: {
  setIsFormOpen: React.Dispatch<React.SetStateAction<{ id: string } | null>>;
  isFormOpen: { id: string };
}) {
  const [formData, setFormData] = useState<FormData>({
    categoryId: isFormOpen.id,
    id: "",
    name: "",
    description: "",
  });

  const { addNewWidget } = useDashboardContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addNewWidget(formData);
    setIsFormOpen(null);
  };

  return (
    <section className="my-1 flex w-full items-center justify-start rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-600 hover:cursor-pointer">
      <form onSubmit={handleSubmit} className="my-4 flex w-full flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="widgetName" className="mb-2 font-semibold">
            Widget Name
          </label>
          <input
            type="text"
            className="rounded border border-gray-200 bg-[#f0f5fa] px-2 py-1 focus:outline-2 focus:outline-gray-400"
            id="widgetName"
            name="widgetName"
            placeholder="Enter widget name..."
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
                id: e.target.value.toLowerCase().replace(/\s+/g, "-"),
              })
            }
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="widgetDescription" className="mb-2 font-semibold">
            Widget Description
          </label>
          <textarea
            className="min-h-16 rounded border border-gray-200 bg-[#f0f5fa] px-2 py-1 focus:outline-2 focus:outline-gray-400"
            id="widgetDescription"
            name="widgetDescription"
            placeholder="Enter widget description..."
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>
        </div>

        <div className="flex gap-4 text-sm">
          <button
            className="flex-1 cursor-pointer rounded-md border border-[#14147d] px-4 py-2 font-semibold text-[#14147d] hover:bg-gray-100"
            type="submit"
          >
            <AddRoundedIcon fontSize="small" className="mr-2" />
            Add Widget
          </button>

          <button
            className="cursor-pointer rounded-md border bg-[#14147d] px-4 py-2 text-white hover:opacity-80"
            onClick={() => setIsFormOpen(null)}
          >
            Close
          </button>
        </div>
      </form>
    </section>
  );
}

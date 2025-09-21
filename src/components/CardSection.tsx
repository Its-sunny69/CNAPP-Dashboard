import Card from "./Card";
import { useDashboardContext } from "../hooks/useDashboardContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import useDebounce from "../hooks/useDebounce";
import { useEffect, useState } from "react";

type Widget = {
  id: string;
  name: string;
  description: string;
};

type Data = {
  id: string;
  name: string;
  widgets: Widget[];
};

export default function CardSection({
  data,
  setIsAddWidgetOpen,
  uncheckedWidgets,
  setSelectedCategoryId,
}: {
  data: Data;
  setIsAddWidgetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uncheckedWidgets: string[];
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [filteredWidgets, setFilteredWidgets] = useState<Widget[]>([]);
  const { searchQuery } = useDashboardContext();
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleAddWidgetClick = () => {
    setSelectedCategoryId(data.id);
    setIsAddWidgetOpen(true);
  };

  useEffect(() => {
    const filteredList = data.widgets
      .filter((widget) => !uncheckedWidgets.includes(widget.id))
      .filter(
        (widget) =>
          widget.name
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase().trim()) ||
          widget.description
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase().trim()),
      );

    setFilteredWidgets(filteredList);
  }, [debouncedSearchQuery, data.widgets, uncheckedWidgets]);
  
  return (
    <section className="p-2 sm:p-4">
      <h2 className="mb-2 font-bold">{data.name}</h2>

      <div className="grid grid-flow-col justify-start gap-4 overflow-x-auto px-1 py-2 sm:p-2">
        {filteredWidgets.length > 0 &&
          filteredWidgets.map((widget) => (
            <Card key={widget.id} data={widget} categoryId={data.id} />
          ))}

        <div className="flex h-48 w-72 items-center justify-center rounded-2xl bg-white p-3 sm:h-52 sm:w-80 sm:p-4 md:h-56 md:w-96">
          <button
            className="flex w-fit items-center justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-1 text-sm font-semibold text-gray-600 hover:cursor-pointer hover:bg-gray-50"
            onClick={handleAddWidgetClick}
          >
            <AddRoundedIcon fontSize="small" className="mr-2" />
            Add Widget
          </button>
        </div>
      </div>
    </section>
  );
}

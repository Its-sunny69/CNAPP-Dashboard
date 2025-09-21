import { useDashboardContext } from "../hooks/useDashboardContext";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Widget = {
  id: string;
  name: string;
  description: string;
};

export default function Card({
  data,
  categoryId,
}: {
  data: Widget;
  categoryId: string;
}) {
  const { removeWidget } = useDashboardContext();

  return (
    <div className="flex h-48 sm:h-52 md:h-56 w-72 sm:w-80 md:w-96 flex-col rounded-2xl bg-white sm:p-4 p-3 text-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{data.name}</h3>

        <button
          className="cursor-pointer text-red-400 transition-all duration-300 hover:scale-110 hover:text-red-500"
          title="Remove Widget"
          onClick={() => removeWidget(categoryId, data.id)}
        >
          <CloseRoundedIcon />
        </button>
      </div>

      <div className="mt-2 flex flex-grow-1 flex-col items-center justify-center text-center">
        <p>{data.description}</p>
      </div>
    </div>
  );
}

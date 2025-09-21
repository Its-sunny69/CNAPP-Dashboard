import { useDashboardContext } from "../hooks/useDashboardContext";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function Searchbar() {
  const { searchQuery, setSearchQuery } = useDashboardContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex sm:w-[26rem] items-center justify-start rounded-md border-2 border-gray-200 bg-[#f0f5fa] px-2 py-1 text-gray-400 focus-within:border-gray-400 focus-within:text-gray-600">
      <SearchRoundedIcon />
      <input
        className="ml-2 w-full bg-transparent outline-none"
        type="text"
        placeholder="Search anything..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
}

import Breadcrumb from "./Breadcrumb";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 md:px-8 py-2">
      <Breadcrumb />
      <Searchbar />
    </nav>
  );
}

import { Link, useLocation } from "react-router";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav>
      <ul className="flex space-x-1 text-xs font-extrabold text-gray-400">
        <li>
          <Link to="/">Home</Link>
        </li>

        {pathnames.length > 0 &&
          pathnames.map((segment, idx) => {
            const to = "/" + pathnames.slice(0, idx + 1).join("/");
            return (
              <li
                key={to}
                className={`${
                  segment === pathnames[pathnames.length - 1]
                    ? "text-[#254a6e]"
                    : "text-gray-400"
                } flex items-center`}
              >
                <ArrowForwardIosRoundedIcon
                  fontSize="inherit"
                  className="mr-1"
                />
                <Link to={to}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

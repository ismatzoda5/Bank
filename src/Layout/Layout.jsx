import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <ul className="flex gap-10 justify-center">
        <li>
          <Link to={"/"}> Home</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;

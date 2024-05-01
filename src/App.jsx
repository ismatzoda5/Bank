import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";
import BankCard from "./pages/BankCard";
import Deposits from "./pages/Deposits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/BankCard",
        element: <BankCard />,
      },
      {
        path: "/Deposits",
        element: <Deposits />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;


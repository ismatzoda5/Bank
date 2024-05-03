import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";
import Rukovodstva from "./pages/rukovodstva";
import Denezhnie_perevodi from "./pages/Denezhnie_perevodi";
// import Deposits from "./pages/Deposits";
import StrakhovieVkladi from "./pages/StrakhovieVkladi";
import Projects from "./pages/Projects";
import Pravaklienta from "./pages/Pravaklienta";
import BankCard from "./pages/BankCard";
import Deposits from "./pages/Deposits";
import Finansovieotchety from "./pages/Finansovieotchety";
import Istoriya from "./pages/istoriya";
import Credits from "./pages/Credits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "credits",
        element:<Credits/>
      },
      {
        path: "rukovodstva",
        element: <Rukovodstva />,
      },
      {
        path: "denezhnieperevody",
        element: <Denezhnie_perevodi />,
      },
      {
        path: "deposity",
        element: <Deposits />,
      },
      {
        path: "strakhoviklady",
        element: <StrakhovieVkladi />,
      },
      {
        path: "bankovskiekarty",
        element: <BankCard />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "BankCard",
        element: <BankCard />,
      },
      {
        path: "Deposits",
        element: <Deposits />,
      },
      {
        path: "finansovieotchety",
        element: <Finansovieotchety />,
      },
      {
        path: "pravaklienta",
        element: <Pravaklienta />,
      },
      {
        path: "istoriya",
        element: <Istoriya />,
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
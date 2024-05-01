import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";
import Rukovodstva from "./pages/rukovodstva";
import Denezhnie_perevodi from "./pages/Denezhnie_perevodi";
import Deposits from "./pages/Deposits";
import StrakhovieVkladi from "./pages/StrakhovieVkladi";
import BankovskieKarty from "./pages/BankovskieKarty";
import Projects from "./pages/Projects";

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
        element: <BankovskieKarty />,
      },
      {
        path: "projects",
        element: <Projects />,
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


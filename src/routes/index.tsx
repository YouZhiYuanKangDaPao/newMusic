// import { Navigate } from "react-router-dom";
import Home from "../application/Home";
import Rank from "../application/Rank";
import Recommend from "../application/Recommond";
import Singers from "../application/Singers";
import { Navigate } from "react-router";

const routes = [
  {
    path: "/",
    element: <Navigate to="home"></Navigate>,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        // index: true,
        path: "recommend",
        element: <Recommend />,
      },
      {
        path: "rank",
        element: <Rank />,
      },
      {
        path: "singers",
        element: <Singers />,
      },
    ],
  },
  {
    path: "recommend",
    element: <Recommend />,
  },
  {
    path: "rank",
    element: <Rank />,
  },
  {
    path: "singers",
    element: <Singers />,
  },
];

export default routes;

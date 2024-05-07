import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import State from "./components/State/State";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "state",
        element: <State />,
      },
    ],
  },
];

export default routes;

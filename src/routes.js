import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import State from "./components/State/State";
import Forms from "./components/Forms/Forms";
import Props from "./components/Props/Props";
import Effect from "./components/Effect/Effect";
import FilterProps from "./components/FilterProps/FilterProps";

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
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "props",
        element: <Props />,
      },
      {
        path: "effect",
        element: <Effect />,
      },
      {
        path: "filterprops",
        element: <FilterProps />,
      },
    ],
  },
];

export default routes;

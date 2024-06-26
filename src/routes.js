import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import State from "./components/State/State";
import Forms from "./components/Forms/Forms";
import Props from "./components/Props/Props";
import Effect from "./components/Effect/Effect";
import FilterProps from "./components/FilterProps/FilterProps";
import ReduxTest from "./components/ReduxTest/ReduxTest";
import Thunk from "./components/Thunk/Thunk";

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
      {
        path: "reduxtest",
        element: <ReduxTest />,
      },
      {
        path: "thunk",
        element: <Thunk />,
      },
    ],
  },
];

export default routes;

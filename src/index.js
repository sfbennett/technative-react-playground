import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./assets/css/index.css";
import store from "./stores";
import { Provider } from "react-redux";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// Above, the Provider makes the Redux store available to all the components inside the App
// We should wrap our App component in this and then pass the store as a prop (as above)

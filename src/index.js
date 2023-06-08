import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
// import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import {router} from "./routers/index"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

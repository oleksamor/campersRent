import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { Provider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

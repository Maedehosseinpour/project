



import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./Redux/store.js";
import { ToastContainer } from "react-toastify";
// import { App } from "./App/App.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from './App/App';

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="toastify"
      />
    </React.StrictMode>
 
);


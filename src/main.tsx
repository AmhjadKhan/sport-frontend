import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="mx-auto max-w-[1280px]">
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </div>
  </StrictMode>
);

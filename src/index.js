import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "./Redux/store";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            closeOnClick
          />
          <App />
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

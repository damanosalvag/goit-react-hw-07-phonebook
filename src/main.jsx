import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { persistor } from "./app/store";
import store from "./app/store";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000e35",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

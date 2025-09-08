import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/router";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <Router>
      <SnackbarProvider
          maxSnack={3} // maximum snackbars at once
          autoHideDuration={3000} // default duration in ms
          anchorOrigin={{ vertical: "top", horizontal: "right" }} // position
          preventDuplicate
      >
        <AppRouter />
      </SnackbarProvider>
    </Router>
  );
}

export default App;

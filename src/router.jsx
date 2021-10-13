import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyles } from "./styles/GlobalStyles";
import ThemeProvider from "./styles/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import Perfil from "./pages/Perfil";
const Routes = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <GlobalStyles />
        <ToastContainer newestOnTop={true} theme="dark" />
        <ThemeProvider>
          <Switch>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute exact path="/perfil">
              <Perfil />
            </ProtectedRoute>
            <ProtectedRoute path="/perfil/:username">
              <Perfil />
            </ProtectedRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </GlobalStateProvider>
  );
};

export default Routes;

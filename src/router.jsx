import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login';
import { GlobalStyles } from './styles/GlobalStyles';
import ThemeProvider from './styles/ThemeProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Routes = () => {
    return(
    <Router>
        <GlobalStyles/>
        <ToastContainer
        newestOnTop={true}
        theme="dark"
        />
        <ThemeProvider>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </ThemeProvider>
    </Router>
    )
}

export default Routes;
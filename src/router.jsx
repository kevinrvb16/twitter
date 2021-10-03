import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles';
import ThemeProvider from './styles/ThemeProvider';
const Routes = () => {
    return(
    <Router>
        <GlobalStyles/>
        <ThemeProvider>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </ThemeProvider>
    </Router>
    )
}

export default Routes;
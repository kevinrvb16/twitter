import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles';
const Routes = () => {
    return(
    <Router>
        <GlobalStyles/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
    )
}

export default Routes;
import { useEffect } from "react"
import { Redirect, Route, RouteProps } from "react-router"
import { toast } from "react-toastify"
import { useGlobalState } from "../../context/GlobalContext"

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest}) => {
    const {auth} = useGlobalState()

    useEffect (() => {
        if(!auth){
            toast.warning("Favor fazer login novamente")
        }
    }, [auth])

    if(auth) {
        return <Route {...rest}>{children}</Route>
    }
        return <Redirect to="/login"/>
}



export default ProtectedRoute
import { createContext, useContext, useState } from "react";

interface IAuth {
    access_token: string
        user: {
            email: string
            id: string
            name: string
            username: string
        }
}

interface IGlobalState {
    auth?: IAuth,
    setAuth: (auth: IAuth) => void
    removeAuth: () => void
}

const GlobalContext = createContext<IGlobalState>({} as IGlobalState)

export const GlobalStateProvider: React.FC = ({ children }) => {
    const [auth, setAuthState] = useState<IAuth | undefined>(() => {
        const auth = localStorage.getItem("@twitter:auth") || undefined

        if(auth){
            return JSON.parse(auth) 
        }

        return auth
    })

    const setAuth = (auth: IAuth) => {
        localStorage.setItem("@twitter:auth", JSON.stringify(auth))
        setAuthState(auth)
    }

        const removeAuth = () => {
            localStorage.removeItem("@twitter:auth")
            setAuthState(undefined)}
    return (
        <GlobalContext.Provider value={{ auth, setAuth, removeAuth }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(GlobalContext)
     return context
}
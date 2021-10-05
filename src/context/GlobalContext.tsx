import { createContext, useContext, useState } from "react";

interface IAuth {
    access_token: string
        user: {
          id: string
          name: string
          username: string
          email: string
        }
}

interface IGlobalState {
    auth?: IAuth,
    setAuth: (auth: IAuth) => void
    removeAuth: () => void
}

const GlobalContext = createContext<IGlobalState>({} as IGlobalState)

export const GlobalStateProvider: React.FC = ({ children }) => {
    const [auth, setAuth] = useState<IAuth>()

    const removeAuth = () => setAuth(undefined)
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
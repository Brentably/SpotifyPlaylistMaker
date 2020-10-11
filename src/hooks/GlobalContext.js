import React from 'react'

const GlobalContext = React.createContext()

const GlobalContextProvider = (props) => {
    const [context, setContext] = useState({})

    return (
        <GlobalContext.Provider value={{state: context, setState: setContext}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default {GlobalContextProvider, GlobalContext}
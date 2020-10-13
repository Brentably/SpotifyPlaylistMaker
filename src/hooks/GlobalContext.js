import React, {useState} from 'react'

const GlobalContext = React.createContext()

const GlobalContextProvider = (props) => {

    const [context, setContext] = useState({})

    return (
        <GlobalContext.Provider value={{context, setContext}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export {GlobalContextProvider, GlobalContext}



import {createStore} from "redux"


export function addToken(token) {
    return {
        type: "ADD_TOKEN",
        payload: token
    }
}

const initState = {
    token: null
}

function reducer(state = initState, action) {
    switch(action.type) {
        case "ADD_TOKEN":
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => console.log(store.getState()))


export default store

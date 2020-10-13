import redux, {createStore} from "redux"

function increment() {
    return {
        type: "INCREMENT"
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}

function addToken(token) {
    return {
        type: "ADD_TOKEN",
        payload: token
    }
}

initState = {
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

const store = createStore(reducer)


store.subscribe(() => console.log(store.getState()))


export default store

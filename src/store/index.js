import { createStore } from "redux"

const initialState = {
    users: [],
    loggedInUser: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        case "LOGIN":
            const user = state.users.find(user => user.contact === action.payload.contact && user.password === action.payload.password)
            if(user){
                return {
                    ...state,
                    loggedInUser: user
                }
            }else{
                return state
            }
        default:
            return state
    }
}

export default createStore(reducer)
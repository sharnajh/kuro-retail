import { SET_AUTHED_USER } from "./user.action"

const INITIAL_STATE = {
    authedUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                authedUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
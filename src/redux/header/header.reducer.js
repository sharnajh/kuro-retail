import { TOGGLE_HEADER } from "./header.action";

const INITIAL_STATE = {
    toggle: false
}

const headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_HEADER:
            return {
                ...state,
                toggle: !state.toggle
            }
        default:
            return state;
    }
}

export default headerReducer;
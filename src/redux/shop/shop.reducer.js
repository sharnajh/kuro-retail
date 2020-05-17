// import { UPDATE_COLLECTIONS } from "./shop.action";

// const INITIAL_STATE = {
//     collections: null
// };

// const shopReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case UPDATE_COLLECTIONS:
//             return {
//                 ...state,
//                 collections: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default shopReducer;


// Asynchronous Redux Method:

import { shopActionsTypes } from "./shop.action";

const INITIAL_STATE = {
    collections: null,
    isFetching: true,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case shopActionsTypes.FETCH_COLLECTIONS_START:
        //     return {
        //         ...state,
        //         isFetching: true
        //     }
        case shopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case shopActionsTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        // case UPDATE_COLLECTIONS:
        //     return {
        //         ...state,
        //         collections: action.payload
        //     }
        default:
            return state;
    }
}

export default shopReducer;
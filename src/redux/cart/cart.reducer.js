import { TOGGLE_CART, ADD_ITEM } from "./cart.action";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    toggleCart: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                toggleCart: !state.toggleCart
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
export const TOGGLE_CART = "TOGGLE_CART";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export const toggleCartAction = () => ({
    type: TOGGLE_CART
});

export const addItemAction = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItemFromCart = (item) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
});

export const removeItemAction = (item) => ({
    type: REMOVE_ITEM,
    payload: item
})
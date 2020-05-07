export const TOGGLE_CART = "TOGGLE_CART";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export const toggleCartAction = () => ({
    type: TOGGLE_CART
});

export const addItemAction = (item) => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItemFromCart = (id) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
})
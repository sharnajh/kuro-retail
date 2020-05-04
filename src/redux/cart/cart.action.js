export const TOGGLE_CART = "TOGGLE_CART";
export const ADD_ITEM = "ADD_ITEM";

export const toggleCartAction = () => ({
    type: TOGGLE_CART
});

export const addItemAction = (item) => ({
    type: ADD_ITEM,
    payload: item
})
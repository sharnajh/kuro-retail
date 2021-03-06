import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItem = (item) => createSelector(
  [selectCartItems],
  (cartItems) => cartItems.find((cartItem) => cartItem.id === item.id, null)
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartToggle = createSelector(
  [selectCart],
  (cart) => cart.toggleCart
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);

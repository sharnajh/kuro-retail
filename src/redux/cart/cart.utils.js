export const addItemToCart = (cartItems, cartItemToAdd) => {
  // if (cartItems[cartItemToAdd.id]) {
  //   return {
  //     ...cartItems,
  //     [cartItems[cartItemToAdd.id]]: {
  //       ...cartItems[cartItemToAdd.id],
  //       quantity: cartItems[cartItemToAdd.id].quantity + 1
  //     }
  //   }
  // }
  // return { ...cartItems, [cartItemToAdd.id]: { ...cartItemToAdd, quantity: 0 } };
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

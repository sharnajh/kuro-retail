import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map((key) => collections[key])
)

export const selectCollection = param => createSelector(
    [selectShopCollections],
    collections => collections[param]
)
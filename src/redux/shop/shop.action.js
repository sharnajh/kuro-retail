export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

export const updateCollections = (collectionsMap) => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})
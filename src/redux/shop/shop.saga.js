import { takeEvery } from "redux-saga/effects";

import { shopActionsTypes } from "./shop.action";

// Generator Function
export function* fetchCollectionsAsync() {}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

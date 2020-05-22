import { takeEvery } from "redux-saga/effects";

import { shopActionTypes } from "./shop.action";

// Generator Function
export function* fetchCollectionsAsync() {}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

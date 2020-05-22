import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import { fetchCollectionsStart } from "./shop/shop.saga";

//const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run();

export const persistor = persistStore(store);

export default { store, persistor };


import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectAuthUser = createSelector(
    [selectUser],
    (user) => user.authedUser
);
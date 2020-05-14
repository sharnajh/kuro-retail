import { createSelector } from "reselect";

const selectHeader = (state) => state.header;

export const selectHeaderToggle = createSelector(
    [selectHeader],
    header => header.toggle
);
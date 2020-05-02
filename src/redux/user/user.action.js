export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const setAuthedUser = user => ({
    type: SET_AUTHED_USER,
    payload: user
})
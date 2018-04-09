// This function sends action and state to the reducers to be stored there. This is also called action creator

import { EMAIL_CHANGED, PASS_CHANGED } from "./types";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passChanged = (text) => {
    return {
        type:PASS_CHANGED,
        payload: text
    };
};
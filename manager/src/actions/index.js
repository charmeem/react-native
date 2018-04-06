// This function sends action and state to the reducers to be stored there
import {EMAIL_CHANGED} from "./types";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
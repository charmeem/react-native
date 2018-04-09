// This function sends action and state to the reducers to be stored and execute futher from there.
// This is also called action creator

import firebase from 'firebase';
import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCESS  } from "./types";

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

// Action creator interacts with firebase for login
// Also uses Thunk via dispatch method
// 'Thunk' used for handling async. actions like- waiting for the result from firebase

export const loginUser = ({ email, password }) => {

    //from here onwards redux-thunk calls dispatch method for async operations

    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        // thunk waits until result arrives from firebase then dispatches action to reducer
          .then(user => {
              dispatch({type:LOGIN_USER_SUCCESS, payload: user});
          });
    };
};

//action creator
// This function sends action and state to the reducers to be stored and execute futher from there.

import firebase from 'firebase';
import { EMAIL_CHANGED,
         PASS_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER_START
       } from "./types";

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

// This Action creator interacts with firebase for login
// Also uses Thunk via dispatch method
// 'Thunk' used for handling async. actions like- waiting for the result from firebase

export const loginUser = ({ email, password }) => {

    //from here onwards redux-thunk calls dispatch method for async operations
    return (dispatch) => {

        dispatch({ type:LOGIN_USER_START}); // Spinner Action creator

        firebase.auth().signInWithEmailAndPassword(email, password)

            // thunk waits until result arrives from firebase then dispatches action to reducer
            .then(user => loginUserSuccess(dispatch, user))

            //create user if it is not done already in firebase
            .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserSuccess =  (dispatch, user) => {
    dispatch({ type:LOGIN_USER_SUCCESS, payload:user});
};

const loginUserFail = (dispatch) => {
    dispatch({type:LOGIN_USER_FAIL});
};
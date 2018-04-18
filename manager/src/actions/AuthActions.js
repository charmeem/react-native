/* Action Creator for initial login Form
 * This function sends action and state to the reducers to be stored and execute further from there.
 * Separate action creators are defined for each actions
 */

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    });
    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({type:LOGIN_USER_FAIL});
};
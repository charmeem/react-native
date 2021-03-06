/* Reducer */

import {EMAIL_CHANGED,
    PASS_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from "../actions/types";

const INITIAL_STATE = {
    email:'',
    password:'',
    user:null,
    error:'',
    loading:''
};

export default (state= INITIAL_STATE, action) => {
    //console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email:action.payload};

        // Above line means:
        // make new state object with all the existing properties copied into it.
        // Then overwrite email property with action.payload. when this new object is
        // send to the redux it will compare old State with new State object and
        // found that the email property has changed
        // so it sends this new State object to the react component.

        case PASS_CHANGED:
            return { ...state, password:action.payload};
        case LOGIN_USER_START:
            return { ...state, loading:true, error:''};

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user:action.payload};
            /* by using ...INITIAL_STATE abovewe are resetting email, password etc. once user login successfully */

        case LOGIN_USER_FAIL:
            return { ...state, error:'Please enter valid email and password', password:'', loading: false};
        default:
            return state;
    }
};
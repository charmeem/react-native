import {EMAIL_CHANGED, PASS_CHANGED} from "../actions/types";

const INITIAL_STATE = {
    email:'',
    password:''};

export default (state= INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email:action.payload};

        // ABove line means:
        // make new state object with all the existing properties copied into it. Then
        //overwrite email property with action.payload. when this new object is send to the redux
        // it will found that the email property has changed and it sends this new value to the react component

        case PASS_CHANGED:
            return { ...state, password:action.payload};
        default:
            return state;
    }
};
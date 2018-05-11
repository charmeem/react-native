/* Reducer for Employee Form */

import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEES_FETCH_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
    name:'',
    phone:'',
    shift:''
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //for e.g: action.payload=== {prop:'name', value:'mubashir'
            return { ...state, [action.payload.prop]: action.payload.value};
            //[action.payload.prop] is key interpolation not an array

        case EMPLOYEE_CREATE:
            return INITIAL_STATE;        //reset the form old values
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;       //reset the form old values
        default:
            return state;
    }
}
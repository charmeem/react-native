/* Reducer for Employee Form */

import { EMPLOYEE_UPDATE} from "../actions/types";

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
        default:
            return state;
    }
}
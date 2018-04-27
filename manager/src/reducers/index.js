// This function combines different reducers
import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeReducer from "./EmployeeFormReducer";

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});

/* Action Creator
 *
 * instead of adding into existing index.js action creator we create this AC just for clarity.
 *
 * Single action creator is used here instead of separate one for each action
 */

import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from "./types";
import {Actions} from 'react-native-router-flux';


export const employeeUpdate =  ({ prop, value }) => {

    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };

};

export const createEmployee = ({ name, phone, shift }) => {

    const { currentUser } = firebase.auth(); // Current authenticated user

    //only pretending but not using redux-thunk as we donot need to send action
    // However we are sending action to reducer just to reset the old data of the employeelist form
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)  //ES6 notation
            .push({name, phone, shift})
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE});  // resetting old form data entry
                Actions.employeeList({ type: 'reset' }) //turning scene to employeelist view
                //type:reset removes back arrow from employeelist screen
            });

    }
};

//Action creator for reading employees from firebase
export const employeesFetch = () => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            // on is event handler watching any change in employee list
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };
};

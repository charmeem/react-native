/* Action Creator
 *
 * instead of adding into existing index.js action creator we create this AC just for clarity.
 *
 * Single action creator is used here instead of separate one for each action
 */

import { EMPLOYEE_UPDATE } from "./types";

export const employeeUpdate =  ({ prop, value }) => {

    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };

};

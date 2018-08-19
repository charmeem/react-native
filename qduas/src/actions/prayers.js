/** Action Creators
 *  Action creator are functions that create an action and dispatch that to all reducers.
 *  When called with an argument transfer that
 *  argument's value to update the reducer via payload property
 *  How to call Action Creator?
 *  Via connect helper, see listItem.js
 */
import { SELECT_PRAYER } from './actionTypes';

export const selectPrayer = (prayerId) => {
    //console.log(prayerId);
    return {
        type: 'SELECT_PRAYER',
        payload: prayerId
    };
};
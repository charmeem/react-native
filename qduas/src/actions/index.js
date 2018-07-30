/** Action Creators
 *  Action creator are functions that create an action and dispatch that to all reducers.
 *  When called with an argument transfer that
 *  argument's value to update the reducer via payload property
 *  How to call Action Creator?
 *  Via connect helper, see listItem.js
 */
export const selectPrayer = (prayerId) => {
    return {
        type: 'select_prayer',
        payload: prayerId
    };
};
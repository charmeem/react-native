/* This reducer has an action associated, dispatched from action creator */
export default (state=null, action) => { /* state=null initializes state variable */
    switch (action.type) {
        case 'select-library':
            return action.payload;
        default:
            return state;
        /* for donot care action return the last state */
    }

};

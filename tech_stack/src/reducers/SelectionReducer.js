// This reducer has an action associated, dispatched by action creator in index.js
// state=null initializes state variable
export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'select-library':
            return action.payload;
        default:
            return state;
    }

};
// for do'not care action return the last state

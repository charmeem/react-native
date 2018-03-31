export default (state = null, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'select-library':
            return action.payload;
        default:
            return state;
    }

};
// for do'not care action return the last state

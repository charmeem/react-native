export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':            //type here should strictly match the type in action creator
            return action.payload;
        default:
            return state;
    }

};
// for do'not care action return the last state

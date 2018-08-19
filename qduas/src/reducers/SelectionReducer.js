/** A reducer to store the current selected Dua ID **/
export default (state = null, action) => {
    switch (action.type){
        case 'SELECT_PRAYER':
            return action.payload;
        default :
            return state;
    }

}
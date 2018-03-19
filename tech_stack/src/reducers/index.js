import { combineReducers } from 'redux';  // combine multiple reducers
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: LibraryReducer                 /* reducer */
});
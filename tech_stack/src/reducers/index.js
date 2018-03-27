import { combineReducers } from 'redux';  // combine multiple reducers
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,                 /* reducer 1 */
    selectedLibraryId: SelectionReducer      /* reducer 2 */
});
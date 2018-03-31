import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
console.log(store.getState);
console.log(this.selectedLibraryId);
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
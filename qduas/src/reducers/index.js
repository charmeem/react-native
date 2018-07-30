import {combineReducers} from 'redux';
import PrayersReducer from './PrayersReducer';
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    prayers: PrayersReducer,
    selectedPrayerId: SelectionReducer
});

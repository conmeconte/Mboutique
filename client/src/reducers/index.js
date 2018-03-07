import { combineReducers } from 'redux';
import {reducer as fromReducers} from 'redux-form'; 

const rootReducer = combineReducers({
    form: fromReducers
});

export default rootReducer; 
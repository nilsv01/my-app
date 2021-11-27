import { combineReducers } from 'redux';
import ReducerDaily from './ReducerDaily';
import ReducerMoment from './ReducerMoment';
import ReducerTotal from './ReducerTotal.js';

const allReducer = combineReducers ({
    moment: ReducerMoment,
    daily: ReducerDaily,
    total: ReducerTotal
})
export default allReducer;

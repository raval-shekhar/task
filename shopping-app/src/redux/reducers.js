import products from './products/reducer';
import { combineReducers } from 'redux';


const createReducer = () =>
	combineReducers({
		products,
	});

export default createReducer;

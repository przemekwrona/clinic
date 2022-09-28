import {combineReducers} from 'redux';
import counterReducer from './counter/counter.reducer';
import authReducer from './auth/auth.reducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
});

export default rootReducer;
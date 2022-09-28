import {LOGIN, LOGOUT} from './auth.types';

const authReducer = (state = {token: ''}, action) => {

    switch (action.type) {
        case LOGIN:
            return {token: action.value};
        case LOGOUT:
            return {token: ''};
        default:
            return state;
    }
};

export default authReducer;
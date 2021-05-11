import{
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_LOGOUT,
    SET_LOGGED
} from '../reducers/loginReducer';
import {loginPass, userData} from "../utils/helpers";

const loginStart = () => {
    return{
        type: LOGIN_START
    };
};

const loginSuccess = data => {
    localStorage.setItem('token', data.token);
    return{
        type: LOGIN_SUCCESS,
        payload: data
    };
};

const loginFailed = error => {
    return{
        type: LOGIN_ERROR,
        payload: error
    }
}

const setLogged = (isLogged) => {
    return {
        type: SET_LOGGED,
        payload: isLogged
    }
}

const logout = () => {
    return{
        type: LOGIN_LOGOUT,
    }
}

export const loginFunction = (login, password, successCallback, errorCallback) => async dispatch => {
    dispatch(loginStart());
        // const { data } = await axios.post('https://node-app-4fun.herokuapp.com/employee/login',{login, password});
        if(loginPass.login === login && loginPass.password === password) {
            dispatch(loginSuccess(userData));
            successCallback();
        } else {
            errorCallback();
            dispatch(loginFailed('login error'));
        }
}

export const functionToLogoutUser = (successCallback) => async dispatch => {
    try{
        dispatch(logout());
        successCallback();
        console.log('logout success');
    }catch(err){
        console.log(err);
    }
}
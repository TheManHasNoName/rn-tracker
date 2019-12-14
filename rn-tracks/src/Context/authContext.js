import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'errMessage':
            return {...state, errMessage: action.payload};
        case 'signin':
            return { token: action.payload, errMessage: ''};
        case 'signout':
            return {...state, token: action.payload }
        case 'clear_errorMessage':
            return { ...state, errMessage: '' }
        default:
            return state;
    }
}

const automaticSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('mainFlow');
    } else {
        navigate('loginFlow');
    }
}

const signup = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', {email, password} );
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
        console.log(response);
    } catch (e) {
        console.log(e.response.data);
        dispatch({type: 'errMessage', payload: 'Invalid Data'})
    }
}

const signin = (dispatch) => async({email, password}) => {
    try {
        const response = await trackerApi.post('signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
        console.log(response);
    } catch (e) {
        console.log(e.response.data);
        dispatch({type: 'errMessage', payload: 'Incorrect Credentials'})
    }
}

const signout = (dispatch) => async() => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout', payload: null });
    navigate('loginFlow');
}

const clearError = (dispatch) => () => {
    dispatch({ type: 'clear_errorMessage' })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup, clearError, automaticSignin},
    { token: null, errMessage: '' }
)
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
        case 'clear_errorMessage':
            return { ...state, errMessage: '' }
        default:
            return state;
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

const signout = (dispatch) => {
    return () => {
    }
}

const clearError = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_errorMessage' })
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup, clearError},
    { token: null, errMessage: '' }
)
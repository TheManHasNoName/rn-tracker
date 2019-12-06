import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type){
        case 'errMessage':
            return {...state, errMessage: action.payload}
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password} );
            console.log(response.data);
        } catch (e) {
            console.log(e.response.data);
            dispatch({type: 'errMessage', payload: 'Invalid Data'})
        }
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        
    }
}

const signout = (dispatch) => {
    return () => {
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup},
    { isSignedIn: false, errMessage: '' }
)
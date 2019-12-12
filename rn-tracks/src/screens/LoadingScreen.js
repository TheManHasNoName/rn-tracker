import React, {useContext, useEffect} from 'react';
import { Context as AuthContext } from '../Context/authContext';

const LoadingScreen = () => {
    const { automaticSignin } = useContext(AuthContext);

    useEffect(() => {
        automaticSignin();
    },[]);

    return null;
}

export default LoadingScreen;
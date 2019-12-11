import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import {Context as AuthContext} from '../Context/authContext';
import AuthForm from '../Components/AuthForm';
import NavLink from '../Components/NavLink';


const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);

    console.log(state);

  return (
      <View style={styles.container}>
          <AuthForm
            style={styles.authProp}
            header={"Signup Tracker"}
            errorMessage={state.errMessage}
            submitButtonTitle={"Signup"}
            submit={signup}
          />

        <NavLink
            routeName={'Signin'}
            text={'Already have an account? Tap here to Signin.'}
        />
      </View>
  );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 400
    },
    errMessage: {
        marginLeft: 12,
        marginTop: 15,
        color: 'red',
        fontSize: 16
    },
    authProp: {
        marginTop: 50
    }
});

export default SignupScreen;
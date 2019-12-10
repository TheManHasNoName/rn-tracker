import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import {Context as AuthContext} from '../Context/authContext';
import AuthForm from '../Components/AuthForm';


const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);

    console.log(state);

  return (
      <View style={styles.container}>
          <AuthForm
            style={styles.authProp}
            header={"Signup for Tracker"}
            errorMessage={state.errMessage}
            submitButtonTitle={"Sigup"}
            submit={signup}
          />
            <Spacer>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.link}>Already have an account? Tap here to signin.</Text>
                </TouchableOpacity>
            </Spacer>
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
    link: {
        color: 'blue'
    },
    authProp: {
        marginTop: 50
    }
});

export default SignupScreen;
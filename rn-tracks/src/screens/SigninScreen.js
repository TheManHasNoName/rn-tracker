import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavLink from '../Components/NavLink';
import AuthForm from '../Components/AuthForm';
import Spacer from '../Components/Spacer';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
          header='Signin Tracker'
          errorMessage=''
          submitButtonTitle='Signin'
          submit={() => {}}
      />

      <NavLink
        routeName='Signup'
        text="Don't have an account? Tap here to Signup."
      />
    </View>
  )
}

SigninScreen.navigationOptions =() => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 400
}
});

export default SigninScreen;
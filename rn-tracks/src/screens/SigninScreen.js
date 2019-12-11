import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavLink from '../Components/NavLink';
import AuthForm from '../Components/AuthForm';
import Spacer from '../Components/Spacer';
import { Context } from '../Context/authContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({navigation}) => {
  const { state, signin, clearError } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearError}/>
      <AuthForm
          header='Signin Tracker'
          errorMessage={state.errMessage}
          submitButtonTitle='Signin'
          submit={signin}
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
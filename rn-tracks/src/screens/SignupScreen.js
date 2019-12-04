import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
      <>
        <Text style={{ fontSize: 48 }}>SignupScreen</Text>
        <Button title={'Got to signin'} onPress={() => navigation.navigate('Signin')}/>

        <Button title={'Got to main flow'} onPress={() => navigation.navigate('mainFlow')}/>
      </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
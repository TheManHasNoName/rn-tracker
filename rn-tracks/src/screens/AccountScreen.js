import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AccountContext } from '../Context/authContext';
import Spacer from '../Components/Spacer';
import {SafeAreaView} from 'react-navigation'

const AccountScreen = () => {
  const { signout } = useContext(AccountContext);

  return (
    <SafeAreaView forceInset={{top: "always"}}>
      <Text style={{ fontSize: 48, margin: 15 }}>Account Screen</Text>

      <Spacer>
        <Button title={'Signout'} onPress={signout}/>
      </Spacer>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 500
}
});

export default AccountScreen;
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../Components/Map';

const TrackCreateScreen = () => {
  return(
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{ fontSize: 48 }}>Create Track</Text>
      <Map />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
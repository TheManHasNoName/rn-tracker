import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {withNavigation} from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({ navigation, routeName, text }) => {
    return (
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        </Spacer>
    )
}
const styles = StyleSheet.create({
    link: {
        color: 'blue'
    },
});
export default withNavigation(NavLink);
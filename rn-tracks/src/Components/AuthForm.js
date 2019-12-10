import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';

const AuthForm = ({header, errorMessage, submitButtonTitle, submit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Spacer>
            <Text h3>{header}</Text>
        </Spacer>

            <Input label={"Email"} value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false}/>
            <Spacer />
            <Input label={"Password"} value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false} secureTextEntry />
            {errorMessage ? <Text  style={styles.errMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button title={"Signup"} onPress={() => submit({email, password})}/>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errMessage: {
        marginLeft: 12,
        marginTop: 15,
        color: 'red',
        fontSize: 16
    },
    link: {
        color: 'blue'
    }
});
export default AuthForm;
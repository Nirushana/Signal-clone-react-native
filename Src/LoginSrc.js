import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';

const LoginSrc = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn ={

    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <StatusBar style="light" />
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
                
            }}
            style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer} >
                <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" autoFocus type="Password" value={password} onChangeText={(text) => setPassword(text)} />
            </View>

            <Button title="Login" style={styles.button} onPress={signIn} />
            <Button title="Register" type="outline" onPress={() => navigation.navigate("Register") } style={styles.button} />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginSrc

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer:{
        width: 300,
    },
    button:{
        width: 200,
        marginTop: 10,
    }
});

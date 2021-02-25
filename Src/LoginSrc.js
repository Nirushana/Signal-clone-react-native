import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginSrc = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if(authUser){
                navigation.replace("Home")
            }
        });
        return unsubscribe;
    },[])
    const signIn = () => {
        auth.signInWithEmailAndPassword(email.trim(), password).catch((error) => alert(error));
    }
    return (
        <View behavior='padding' style={styles.container} >
            <StatusBar style="light" />
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
                
            }}
            style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer} >
                <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="Password" value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={signIn} />
            </View>

            <Button title="Login" containerStyle={styles.button} onPress={signIn} />
            <Button title="Register" type="outline" onPress={() => navigation.navigate("Register") } containerStyle={styles.button} />
            <View style={{ height: 100 }} />
        </View>
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

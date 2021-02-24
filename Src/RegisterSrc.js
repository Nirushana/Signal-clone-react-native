import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';



const RegisterSrc = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () => {

    }

    return (
        <KeyboardAvoidingView>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }} >Create a Signal account</Text>

            <View style={styles.container}>
                <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)} />

                <Input placeholder="Email" type="text" value={email} onChangeText={(text) => setEmail(text)} />

                <Input placeholder="Password" secureTextEntry type="text" value={password} onChangeText={(text) => setPassword(text)} />

                <Input placeholder="Profile Picture Url (Optional)" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register} />
            </View>

            <Button title="Register" raised onPress={register} />
        </KeyboardAvoidingView>
    )
}

export default RegisterSrc

const styles = StyleSheet.create({});

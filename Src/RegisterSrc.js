import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Image, Text } from 'react-native-elements';
import { auth } from '../firebase';



const RegisterSrc = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');



    const register = () => {
        auth
            .createUserWithEmailAndPassword(email.trim(), password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl ||  "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                });
            })
            .catch((e) => alert(e.message));
    }

    return (
        <View style={styles.container} >
            <StatusBar style="light" />

            <Text h3 style={{marginBottom: 80}} >Create a Signal account</Text>

            <View style={styles.inputcontainer}>
                <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text) => setName(text)} />

                <Input placeholder="Email" type="text" value={email} onChangeText={(text) => setEmail(text)} />

                <Input placeholder="Password" secureTextEntry type="text" value={password} onChangeText={(text) => setPassword(text)} />

                <Input placeholder="Profile Picture Url (Optional)" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register} />
            </View>

            <Button containerStyle={styles.button} title="Register" raised onPress={register} />

        </View>
    )
}

export default RegisterSrc

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    inputcontainer:{
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
});

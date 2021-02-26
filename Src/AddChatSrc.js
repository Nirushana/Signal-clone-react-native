import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../firebase';

const AddChatSrc = ({ navigation }) => {
    const [input, setInput]= useState('');

    const createChat = async () =>{
        await db.collection('chats').add({
            chatName: input,
        }).then(() => navigation.goBack())
        .catch((error) => {
            alert(error);
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new chat',
            
        })
    },[])

    return (
        <View style={styles.container} >
            <Input placeholder='Enter a chat name' 
            value={input} 
            onChangeText={(text) => setInput(text)} 
            leftIcon={ <Icon name="wechat" type="antdesign" size={24} color="black" />} 
            onSubmitEditing={createChat}
            />
            <Button disabled={!input} onPress={createChat} title="Create new chat" />
        </View>
    )
}

export default AddChatSrc

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%',
    },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// external import files 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//imported Screens or components
import LoginSrc from './Src/LoginSrc';
import RegisterSrc from './Src/RegisterSrc';
import HomeSrc from './Src/HomeSrc';
import AddChatSrc from './Src/AddChatSrc'
import ChatSrc from './Src/ChatSrc';

const Stack = createStackNavigator();
const globalScreenOption = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOme" screenOptions={globalScreenOption} >
        <Stack.Screen name="Login" component={LoginSrc} />
        <Stack.Screen name="Register" component={RegisterSrc} />
        <Stack.Screen name="Home" component={HomeSrc} />
        <Stack.Screen name="AddChat" component={AddChatSrc} />
        <Stack.Screen name="Chat" component={ChatSrc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NativeBaseProvider } from 'native-base';
import { MyTabs } from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';


const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    )
}
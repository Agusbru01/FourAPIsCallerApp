import React, { useState, } from 'react';
import { View,Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import {GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';


export default function LoginScreen({ navigation }) {
    dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState(null)

    /* useEffect(()=>{
        GoogleSignin.configure();
    },[])

    signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setUserInfo(userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          } else if (error.code === statusCodes.IN_PROGRESS) {
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          } else {
          }
        }
      }; */

    const handleLogin = () => {
        var userInfo ={
            username:username,
            password:password,
        }
        dispatch(login(userInfo))
        navigation.navigate('Home')
    };

    return (
        <View style={styles.container}>
            <View style={{paddingBottom:30}}>
                <Text style={{ color: "black", fontSize: 40, }}>Bienvenido!</Text>
            </View>
            <TextInput
                placeholder="Usuario"
                value={username}
                placeholderTextColor="gray"
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                placeholderTextColor="gray"
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
            {/* <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress}
            />; */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        color:"black"
    },
});
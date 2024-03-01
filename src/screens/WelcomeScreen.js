import React, { useEffect } from "react"
import { View, Text, TouchableOpacity } from "react-native"


export default function WelcomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View>
                    <Text style={{color:"black", fontSize:40,}}>Bienvenido!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
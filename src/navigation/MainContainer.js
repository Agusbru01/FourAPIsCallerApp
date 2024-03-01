import * as React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Icon } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';

const Tab = createBottomTabNavigator()

const icons = {
    First: "images",
    Second: "archive",
    Third: "documents",
    Fourth: "credit",
};

export function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName={"First"}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let rn = route.name

                    let iconBase = icons[rn]
                    iconName =  `${iconBase}`;

                    return <Entypo name={iconName} style={{color:color, fontSize:size}} />
                }
            })}
        >
            <Tab.Screen name={"First"} component={FirstScreen} />
            <Tab.Screen name={"Second"} component={SecondScreen} />
            <Tab.Screen name={"Third"} component={ThirdScreen} />
            <Tab.Screen name={"Fourth"} component={FourthScreen} />
        </Tab.Navigator>
    );
}
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import MainMenuScreen from "../screens/MainMenuScreen";
import DeviceMatrixscreen from "../screens/UserScreens/devicematrix";
import Get from "../screens/UserScreens/Token";
import Profilescreen from "../screens/UserScreens/profile";
import Timetable from "../screens/UserScreens/Timetable";
import Detail from "../screens/UserScreens/Detail";
import Yieldscreen from "../screens/UserScreens/inverterYield";
import Incomescreen from "../screens/UserScreens/Income";

// import userdrawer from "../screens/drawer/userdrawer";
// import CustomSidebarMenu from "../screens/drawer/CustomSidebarMenu";



const Stack = createStackNavigator();

const RootRoute = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false
                })}>

                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Mainmenu" component={MainMenuScreen} />
                <Stack.Screen name="DeviceMatrix" component={DeviceMatrixscreen} />
                <Stack.Screen name="Timetable" component={Timetable} />
                <Stack.Screen name="Gets" component={Get} />
                <Stack.Screen name="Details" component={Detail} />
                <Stack.Screen name="Profile" component={Profilescreen} />
                <Stack.Screen name="Yield" component={Yieldscreen} />
                <Stack.Screen name="Income" component={Incomescreen} />
             
                {/* <Stack.Screen name="userdrawer" component={userdrawer} />
                <Stack.Screen name="CustomSidebarMenu" component={CustomSidebarMenu} /> */}
    

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootRoute;
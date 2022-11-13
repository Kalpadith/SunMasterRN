import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import LoginScreen from "../screens/LoginScreen";
import MainMenuScreen from "../screens/MainMenuScreen";
import AdminHomeScreen from "../screens/AdminHomeScreen";
import AdminLoginScreen from "../screens/AdminLoginScreen";
import AdminTypeSelectScreen from "../screens/AdminTypeSelectScreen";
import HomeScreen from "../screens/HomeScreen";
import UserHomeScreen from "../screens/UserHomeScreen";
import ViewBookingScreen from "../screens/ViewBookingScreen";
import ViewJourneyScreen from "../screens/ViewJourneyHistoryScreen";
import TimeAllocationScreen from "../screens/TimeAllocationScreen";
import TokenScreen from "../screens/UserScreens/Token";
import GenToken from "../screens/UserScreens/generateToken";
import BookingScreen from "../screens/UserScreens/booking";
import PaymentScreen from "../screens/UserScreens/payment";
import Timetable from "../screens/UserScreens/Timetable";


import JHomeScreen from "../screens/JHomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Whatis from "../screens/Whatis";
import Whatis2 from "../screens/Whatis2";
import Whatis3 from "../screens/Whatis3";
import Companyj from "../screens/Companyj";
import Packagesj from "../screens/Packagesj";
import Request from "../screens/Request";
import Powerconsumption from "../screens/Powerconsumption";
import Powerconsumption2 from "../screens/Powerconsumption2";
import Viewrequest from "../screens/Viewrequest";
import Calculate from "../screens/Calculate";


const Stack = createStackNavigator();

const RootRoute = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false
                })}>

                
                <Stack.Screen name="JHomeScreen" component={JHomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Whatis" component={Whatis} />
                <Stack.Screen name="Whatis2" component={Whatis2} />
                <Stack.Screen name="Whatis3" component={Whatis3} />
                <Stack.Screen name="Companyj" component={Companyj} />
                <Stack.Screen name="Packagesj" component={Packagesj} />
                <Stack.Screen name="Request" component={Request} />
                <Stack.Screen name="Powerconsumption" component={Powerconsumption} />
                <Stack.Screen name="Powerconsumption2" component={Powerconsumption2} />
                <Stack.Screen name="Calculate" component={Calculate} />



                {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Mainmenu" component={MainMenuScreen} />
                <Stack.Screen name="Adminhome" component={AdminHomeScreen} />
                <Stack.Screen name="Adminlogin" component={AdminLoginScreen} />
                <Stack.Screen name="AdminType" component={AdminTypeSelectScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Userhome" component={UserHomeScreen} />
                <Stack.Screen name="ViewBooking" component={ViewBookingScreen} />
                <Stack.Screen name="Viewjourney" component={ViewJourneyScreen} />
                <Stack.Screen name="Timeallocation" component={TimeAllocationScreen} />
                <Stack.Screen name="Token" component={TokenScreen} />
                <Stack.Screen name="GenToken" component={GenToken} />
                <Stack.Screen name="Book" component={BookingScreen} />
                <Stack.Screen name="payment" component={PaymentScreen} />
                <Stack.Screen name="Timetable" component={Timetable} /> */}
    

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootRoute;
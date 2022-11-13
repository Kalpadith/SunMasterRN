import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import LoginScreen from "../screens/LoginScreen";
import CompanMenuScreen from "../screens/CompanMenuScreen";
import CompanyHomeScreen from "../screens/CompanyHomeScreen"
import AddGallery from "../screens/UserScreens/addgallery";
import AddProduct from "../screens/UserScreens/addproduct";
import Agreement from "../screens/UserScreens/agreement";
import Contact from "../screens/UserScreens/contact";
import Gallery from "../screens/UserScreens/gallery";
import Product from "../screens/UserScreens/product";
import Static from "../screens/UserScreens/statics";


const Stack = createStackNavigator();

const RootRoute = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false
                })}>

                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="CompanMenuScreen" component={CompanMenuScreen} />
                <Stack.Screen name="CompanyHomeScreen" component={CompanyHomeScreen} />
                <Stack.Screen name="addgallery" component={AddGallery} />
                <Stack.Screen name="addproduct" component={AddProduct} />
                <Stack.Screen name="contact" component={Contact} />
                <Stack.Screen name="agreement" component={Agreement} />
                <Stack.Screen name="product" component={Product} />
                <Stack.Screen name="gallery" component={Gallery} />
                <Stack.Screen name="statics" component={Static} />
    

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootRoute;
import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";


const SCREEN_HEIGHT = Dimensions.get('window').height;



const MainMenuScreen = () => {

    const useNavigate = useNavigation();

    const navigationDevice = () => {
        useNavigate.navigate('Gets');
    }
    const navigationMatrix = () => {
        useNavigate.navigate('DeviceMatrix');
    }

    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationYield = () => {
        useNavigate.navigate('Yield');
        
    }
    const navigationProfile = () => {
        useNavigate.navigate('Profile');
        
    }
    const navigationincome = () => {
        useNavigate.navigate('Income');
        
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Main menu </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>


                        <View style={[Theme.w90, Theme.h10, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../../images/Ticketing.png')}/> */}
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* token images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                             onPress={() => navigationMatrix()}
                            ButtonName={"Device Matrix"} />
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                             onPress={() => navigationDevice()}
                            ButtonName={"Devices"} />
                            </View>
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* Account images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        <View style={[Theme.w90, Theme.h4, Theme.justAlign]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                            onPress={() => navigationProfile()}
                            ButtonName={"Profile"} />
                            </View>
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w90, Theme.h10, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* Balance images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* Reserve images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                            onPress={() => navigationYield()}
                            ButtonName={"Inverter Yield"} />
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton
                            onPress={() => navigationincome()} 
                            ButtonName={"Income"} />
                            </View>
                        </View>

                        <View style={[Theme.h10]} />

                        <View style={[Theme.w50, Theme.h4]}>
                            <TickButton
                              onPress={() => navigationLogin()} 
                            ButtonName={"Logout"} />
                        </View>

                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})

export default MainMenuScreen;
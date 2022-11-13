import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";


const SCREEN_HEIGHT = Dimensions.get('window').height;



const JHomeScreen = () => {

    const useNavigate = useNavigation();

    const navigationWhatis = () => {
        useNavigate.navigate('Whatis');
    }
    const navigationConsumption = () => {
        useNavigate.navigate('Powerconsumption');
    }

    const navigationInvestment = () => {
        useNavigate.navigate('Packagesj');
        
    }

    const navigationRegister = () => {
        useNavigate.navigate('Register');
        
    }

    const navigationViewrequest = () => {
        useNavigate.navigate('Viewrequest');
        
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100 , Theme.bgMainj]}>
                    
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Sun Master </Text>
                    </View>

                    <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../images/Blog1.png')} 
                            style = {{ width: 300, height: 200 }} />}
                        </View>
                        
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

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
                             onPress={() => navigationConsumption()}
                            ButtonName={"Power Consumption"} />
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                             onPress={() => navigationWhatis()}
                            ButtonName={"What is solar panel       "} />
                            </View>
                        </View>

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
                            <View style={[Theme.w30, Theme.h100, Theme.bgBlue, Theme.justAlign]}>
                                {/* Account images ---------------------------------------------------------------------------------------------------- */}
                                {/* <Image source={require('../assets/')}/> */}
                            </View>
                        </View>

                        {/* <View style={[Theme.w90, Theme.h4, Theme.justAlign]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                            onPress={() => navigationViewrequest()}
                            ButtonName={"View Request"} />
                            </View>
                        </View> */}

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
                            onPress={() => navigationInvestment()} 
                            ButtonName={"Investment plans"} />
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                            onPress={() => navigationRegister()} 
                            ButtonName={"Register"} />
                            </View>
                        </View>

                        <View style={[Theme.h10]} />

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

export default JHomeScreen;
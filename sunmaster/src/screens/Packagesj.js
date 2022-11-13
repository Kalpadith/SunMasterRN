import { saveAs } from 'file-saver'
import Ticketing from "../images/Ticketing.png"
import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native'
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Packagesj = () => {
    
    const useNavigate = useNavigation();

    const navigationhome = () => {
        useNavigate.navigate('JHomeScreen');
    }

    const navigationrequest = () => {
        useNavigate.navigate('Request');
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100, Theme.bgMainj]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}>Available Packages </Text>
                    </View>
                    
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>
                       
                        

                        <Text style={[Theme.fGray, Theme.f20]}> Prices</Text>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../images/packages1.jpg')} 
                            style = {{ width: 300, height: 150 }} />}
                        </View>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fGray, Theme.f15]}> OFF GRID BATTERY SOLAR PV SYSTEMS (No electricity export to Street Mains)</Text>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../images/packages2.jpg')} 
                            style = {{ width: 300, height: 50 }} />}
                        </View>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationhome()}
                                ButtonName={"Finish"}
                            />
                        </View>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>


                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationrequest()}
                                ButtonName={"Request"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>


    )
}

export default Packagesj;



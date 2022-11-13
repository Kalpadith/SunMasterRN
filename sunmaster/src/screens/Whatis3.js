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

const Whatis3 = () => {
    
    const useNavigate = useNavigation();

    const navigationcompany = () => {
        useNavigate.navigate('Companyj');
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100, Theme.bgMainj]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}>What is solar panel system?? </Text>
                    </View>
                    
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>
                       
                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../images/Blog4.jpg')} 
                            style = {{ width: 250, height: 150 }} />}
                        </View>

                        <Text style={[Theme.fGray, Theme.f20]}> The Benefits of Solar Panels </Text>
                        
                        <Text style={[Theme.fBlack, Theme.f20]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        Using solar panels is a very practical way to produce electricity for many applications. The obvious would have to be off-grid living. Living off-grid means living in a location that is not serviced by the main electric utility grid. Remote homes and cabins benefit nicely from solar power systems. No longer is it necessary to pay huge fees for the installation of electric utility poles and cabling from the nearest main grid access point. A solar electric system is potentially less expensive and can provide power for upwards of three decades if properly maintained.
                        </Text>

                        <Text style={[Theme.fBlack, Theme.f20]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        Besides the fact that solar panels make it possible to live off-grid, perhaps the greatest benefit that you would enjoy from the use of solar power is that it is both a clean and a renewable source of energy. With the advent of global climate change, it has become more important that we do whatever we can to reduce the pressure on our atmosphere from the emission of greenhouse gases. Solar panels have no moving parts and require little maintenance. They are ruggedly built and last for decades when porperly maintained.
                        </Text>

                        <Text style={[Theme.fBlack, Theme.f20]}> Your</Text>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationcompany()}
                                ButtonName={"Next"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>


    )
}

export default Whatis3;



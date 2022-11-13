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

const Whatis = () => {
    
    const useNavigate = useNavigation();

    const navigationWhatis2 = () => {
        useNavigate.navigate('Whatis2');
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
                            {<Image source={require('../images/Blog2.png')} 
                            style = {{ width: 250, height: 150 }} />}
                        </View>

                        <Text style={[Theme.fGray, Theme.f20]}> What Is A Solar Panel? </Text>
                        
                        <Text style={[Theme.fBlack, Theme.f20]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        Solar energy begins with the sun. Solar panels (also known as "PV panels") are used to convert light from the sun, which is composed of particles of energy called "photons", into electricity that can be used to power electrical loads.
                        </Text>

                        <Text style={[Theme.fBlack, Theme.f20]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        Solar panels can be used for a wide variety of applications including remote power systems for cabins, telecommunications equipment, remote sensing, and of course for the production of electricity by residential and commercial solar electric systems.
                        </Text>

                        <Text style={[Theme.fBlack, Theme.f20]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        The development of solar energy goes back more than 100 years. In the early days, solar energy was used primarily for the production of steam which could then be used to drive machinery. But it wasn't until the discovery of the "photovoltaic effect" by Edmond Becquerel that would allow the conversion of sunlight solar electric energy. Becquerel's discovery then led to the invention in 1893 by Charles Fritts of the first genuine solar cell which was formed by coating sheets of selenium with a thin layer of gold. And from this humble beginning would arise the device we know today as the solar panel.
                        </Text>

                        

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationWhatis2()}
                                ButtonName={"Next"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>


    )
}

export default Whatis;



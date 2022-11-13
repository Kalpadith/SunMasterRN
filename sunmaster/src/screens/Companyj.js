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

const Companyj = () => {
    
    const useNavigate = useNavigation();

    const navigationpackage = () => {
        useNavigate.navigate('Packagesj');
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100, Theme.bgMainj]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}>CEB registered companies </Text>
                    </View>
                    
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>
                       
                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../images/Blog3.jpg')} 
                            style = {{ width: 250, height: 150 }} />}
                        </View>

                        <Text style={[Theme.fBlack, Theme.f20]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        1.Genso
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        3.Solar Power Partners
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        3.JLanka Technologies (Pvt) Limited
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        4.Acess solar
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        5.SolarTherm
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        6.Abans Solar
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        7.HiEnergy Services
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        8.GreenSol Renewable Power Pvt Ltd
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        9.Nihon Green Power Co. (Pvt) Limited
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fWhite, Theme.f15]}> 
                        10.Epigro Energy 
                        </Text>
                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationpackage()}
                                ButtonName={"Next"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>


    )
}

export default Companyj;



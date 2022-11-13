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

const Powerconsumption = () => {
    
    const useNavigate = useNavigation();

    const navigationpowerconsumption2 = () => {
        useNavigate.navigate('Powerconsumption2');
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100, Theme.bgMainj]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}>Details of power consumption </Text>
                    </View>
                    
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>

                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../images/images.png')} 
                            style = {{ width: 300, height: 300 }} />}
                        </View>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <Text style={[Theme.fGray, Theme.f15]}> Check your power consumption</Text>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_user_address(e)}
                                placeHolder={'CEB Account Number'}
                            />
                        </View>

                        <Text style={[Theme.fBlack, Theme.f15]}> Your</Text>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationpowerconsumption2()}
                                ButtonName={"Go"}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>


    )
}

export default Powerconsumption;



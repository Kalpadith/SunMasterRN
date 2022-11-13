import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import uploadcloud from "../../images/uploadcloud.jpg";
import { Image } from 'react-native'


const SCREEN_HEIGHT = Dimensions.get('window').height;

const DeviceMatrixscreen = () => {

   

    const useNavigate = useNavigation();

    const navigationAdddevice = () => {
        useNavigate.navigate('Timetable');
    }
    
    


   

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Device Matrix </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>
                        <View>
                            <Text style={[Theme.txtbordercontainer, Theme.fYellow, Theme.justAlign]}>
                            Let The Sun Pay Your Bills...
                            </Text>
                        </View>
                        <View>
                            { <Image
                                style={[Theme.imgcontainer2]}
                                source={require("../../images/system.png")}
                                />}
                                
                        </View>
                       

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationAdddevice()}
                                ButtonName={"Add New Device"} />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default DeviceMatrixscreen;
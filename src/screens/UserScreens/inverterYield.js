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
const Yieldscreen = () => {

   

    const useNavigate = useNavigation();

    const navigationAdddevice = () => {
        useNavigate.navigate('Mainmenu');
    }
 

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Inverter Yield  </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>
                        <View>
                            
                        </View>
                        <View>
                            { <Image
                                style={[Theme.imgcontainer2]}
                                source={require("../../images/solax1.jpg")}
                                />}
                                
                        </View>
                       

                       

                        <View style={[Theme.h2]} />
                        <View style={[Theme.w80, Theme.h10]}>
                            <Text style={[Theme.font1]}>Total Export Units</Text>
                            <TickTextField
                                onChangeTxt={e => setEmail_Address(e)}
                                placeHolder={'860 kWh'}
                            />
                        </View>
                        <View style={[Theme.h2]} />
                        <View style={[Theme.w80, Theme.h10]}>
                            <Text  style={[Theme.font1]}>Total Import Units</Text>
                            <TickTextField
                                onChangeTxt={e => setEmail_Address(e)}
                                placeHolder={'205 kWh'}
                            />
                        </View>
                       

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationAdddevice()}
                                ButtonName={"Back"} />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Yieldscreen;
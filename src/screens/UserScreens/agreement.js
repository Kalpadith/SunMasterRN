import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import Ticketing8 from "../../images/agree.png"
import { Image } from 'react-native'
import { saveAs } from 'file-saver';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const AgrrementScreen = () => {

   
    



    const useNavigate = useNavigation();

    const navigationAgreement = () => {
        alert('Downloading');
        useNavigate.navigate('CompanMenuScreen');
    }
    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationBack = () => {
        useNavigate.navigate('CompanMenuScreen');
    }
    
    
    const downloadImage = () => {
        saveAs('', 'image.png');
    }
       
    

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f16]}> CEYLON ELECTRICITY BOARD AGREEMENT </Text>
                    </View>
                    <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                   
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />

                       


                    <View style={[Theme.w98, Theme.h80, Theme.border1_5, Theme.smoke, Theme.justAlign]}>

                        <View style={[Theme.w80, Theme.h7]}>
                        <Text style={[Theme.fBlack, Theme.f20]}> This is to
                            verify that our CEB partnership with you is very confident.</Text>
                            
                        </View>
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />

                        <View style={[Theme.dFlexCol]}>
                           
                           {<Image source={require('../../images/agree.png')} 
                           style = {{ width: 100, height: 90 }} />}
                       </View>

                        <View style={Theme.h2} />
                        <View style={Theme.h2} />

                       

                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationAgreement()}
                                ButtonName={"Print Agreement"}
                            />
                        </View>
                        
                    </View>
                    <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                    <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                    <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                        
                            <TickButton
                              onPress={() => navigationLogin()} 
                            ButtonName={"Logout"} />
                        </View>

                        <View style={[Theme.w40, Theme.h100]} />
                        <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                        
                        <TickButton
                              onPress={() => navigationBack()} 
                            ButtonName={"Back"} />
                        </View></View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default AgrrementScreen;



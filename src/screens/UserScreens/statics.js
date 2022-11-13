import { saveAs } from 'file-saver'
import Ticketing from "../../images/Solar-Panel.png";
import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { Image } from 'react-native'
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { useNavigation } from "@react-navigation/native";
import Ticketing9 from "../../images/Chart.png"
import Ticketing10 from "../../images/stac.png"

const Statics = () => {
    
    const useNavigate = useNavigation();
    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    
    const navigationBack = () => {
        useNavigate.navigate('CompanMenuScreen');
    }
    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Monthly Statics </Text>
                    </View>
                    
                   

                        <View style={[Theme.h2]} />

                        <View style={[Theme.h2]} />

                    
                    <View style={[Theme.w98, Theme.h70, Theme.border1_5, Theme.smoke, Theme.justAlign]}>
                       
                        <Text style={[Theme.fBlack, Theme.f20]}> 
                           Mothly statictics for the product sales
                        </Text>
                        <View style={[Theme.h2]} />
                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../../images/stac.png')} 
                            style = {{ width: 250, height: 150 }} />}
                        </View>
                        
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />

                        <Text style={[Theme.fBlack, Theme.f20]}> 
                           Mothly statictics for the customer satisfications
                        </Text>
                        <View style={[Theme.h2]} />
                        <View style={[Theme.dFlexCol]}>
                            {/* schedule images ---------------------------------------------------------------------------------------------------- */}
                            {<Image source={require('../../images/Chart.png')} 
                            style = {{ width: 250, height: 150 }} />}
                        </View>
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        
                        
                        
                       
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

export default Statics;



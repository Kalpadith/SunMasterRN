import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";


const SCREEN_HEIGHT = Dimensions.get('window').height;



const MainMenuScreen = () => {

    const useNavigate = useNavigation();

    const navigationContact = () => {
        useNavigate.navigate('contact');
    }
    const navigationBack = () => {
        useNavigate.navigate('LoginScreen');
    }
    const navigationAgreement = () => {
        useNavigate.navigate('agreement');
    }

    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationGallery = () => {
        useNavigate.navigate('gallery');
        
    }
    const navigationProduct = () => {
        useNavigate.navigate('product');
        
    }
    const navigationStatics = () => {
        useNavigate.navigate('statics');
        
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Main Menu </Text>
                    </View>
                    <View style={[Theme.h2]} />

                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />

                        <View style={[Theme.h2]} />



                    

                        <View style={[Theme.h2]} />

                        <View style={[Theme.h2]} />

                    <View style={[Theme.w98, Theme.h85, Theme.border1_5, Theme.smoke, Theme.justAlign]}>


                        

                        <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                             onPress={() => navigationContact()}
                            ButtonName={"contacts"} />
                            </View>

                            <View style={[Theme.w40, Theme.h100]} />

                            <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
                            <TickButton 
                             onPress={() => navigationAgreement()}
                            ButtonName={"agreement"} />
                            </View>
                        </View>
                            
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />

                        
                        <View style={[Theme.w50, Theme.h4, Theme.dFlexRow]}>
                       
                            
                            <TickButton 
                             onPress={() => navigationGallery()}
                            ButtonName={"gallery"} />
                        
                        </View>

                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />
                            <View style={[Theme.h2]} />

                        <View style={[Theme.w90, Theme.h4, Theme.dFlexRow]}>
                        <View style={[Theme.w30, Theme.h100, Theme.dFlexCol]}>
                            <TickButton 
                             onPress={() => navigationProduct()}
                            ButtonName={"product"} />
                        </View>
                        
                        <View style={[Theme.w40, Theme.h100]} />

                        
                        <View style={[Theme.w30, Theme.h100, Theme.dFlexCol]}>
                            <TickButton 
                             onPress={() => navigationStatics()}
                            ButtonName={"statics"} />
                        </View>
                        </View>
                        
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})

export default MainMenuScreen;
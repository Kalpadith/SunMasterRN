import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity,PermissionsAndroid, TouchableHighlight,Image, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import {Avatar, Button} from "react-native-paper";
import {launchImageLibrary} from "react-native-image-picker/src";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const AddProductScreen = () => {

   
    



    const useNavigate = useNavigation();

    const navigationProduct = () => {
        useNavigate.navigate('CompanMenuScreen');
        alert('Added Successfully');
    }
    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationBack = () => {
        useNavigate.navigate('product');
    }

    const [Pic, SetPic] = React.useState('');

    const setToastMsg = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };
   
    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
        }; 
        launchImageLibrary(options, response => {
             if(response.didCancel){
                setToastMsg('Canceled Image selection');
             }else if(response.errorCode == 'permission'){
                setToastMsg('Permision denied');
             }else if(response.errorCode == 'others'){
                setToastMsg(response.errorMessage);
             }else if(response.assets[0].fileSize > 2097152){
                Alert.alert(
                    'Maximum image size exceeded',
                    'Please choose another image under 2 MB',
                    [{text: 'OK'}],
                );
             }else{
                SetPic(response.assets[0].base64);
             }
         });
    };
   
    

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h10, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f16]}> Add new products </Text>
                    </View>

                   

                        <View style={[Theme.h2]} />

                        <View style={[Theme.h2]} />


                    <View style={[Theme.w98, Theme.h80, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>

                    <View>
                        <View>
                            <TouchableHighlight
                            onPress={()=>alert('pressed')}
                            underlayColor='rgba(0,0,0,0)'>
                                <Avatar.Image
                                size={150}
                                source={{uri:'data:image/png;base64,'+Pic}}
                                />
                            </TouchableHighlight>
                            

                            
                        </View>
                    </View>
                       

                        <View><Button mode="contained" onPress={ ()=> uploadImage()}>Upload</Button>
                        <View style={[Theme.h2]} />
                        
                        
                        </View> 
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                    

                    <View style={[Theme.w80, Theme.h10]}>
                    <TickTextField
        
                    placeHolder={'Product Name'}
       
                    />
                </View>

                <View style={Theme.h2} />
                   
                    

                <View style={[Theme.w80, Theme.h20]}>
                    <TickTextField
        
                    placeHolder={'Description'}
       
                    />
                </View>
                <View style={Theme.h2} />

               
                    

                <View style={[Theme.w80, Theme.h7]}>
                <TickButton
                onPress={() => navigationProduct()}
                ButtonName={"Add"}
                />
                </View>

                    </View>
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                    
                    
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

export default AddProductScreen;



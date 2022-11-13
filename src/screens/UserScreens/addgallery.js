import React, { useState } from "react";
import { View, Text, Dimensions,  LogBox, TouchableOpacity, TouchableHighlight, Image, ToastAndroid, Alert, PermissionsAndroid } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import {Avatar, Button} from "react-native-paper";
import {launchImageLibrary} from "react-native-image-picker/src";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const AddGalleryScreen = () => {

   
    

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

    const useNavigate = useNavigation();

    const navigationGallery = () => {
        useNavigate.navigate('CompanMenuScreen');
        alert('Added Successfully');
    }
    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationBack = () => {
        useNavigate.navigate('gallery');
    }
    
   
    

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f15]}> Add Photos to Gallery </Text>
                    </View>

                    

                        <View style={[Theme.h2]} />
                        <View style={[Theme.h2]} />

                        


                        <View style={[Theme.w98, Theme.h50, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>

                        {/* <View style={[Theme.w80, Theme.h7]}>
                        <TickTextField
        
                        placeHolder={'image'}
                        />
                        </View> */}

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

                        <View>
                            {/* <TouchableOpacity onPress={openCamra}>
                                <Text>Open Camera</Text>
                            </TouchableOpacity>
                            <Image source={{uri: cameraPhoto}} /> */}
                            

                            {/* <TouchableHighlight
                            onPress={()=>alert('pressed')}
                            underlayColor='rgba(0,0,0,0)'>
                                <Avatar.Image
                                size={200}
                                source={{uri:'data:image/png;base64,'+galleryPhoto}}
                                />
                            </TouchableHighlight> */}
                            {/* <TouchableOpacity onPress={openGallery}>
                                <Text>Choose photo</Text>
                            </TouchableOpacity> */}
                            {/* <Button title="choose" onPress={() => this.openGallery()}/>
                            <Image source={{uri: galleryPhoto}} /> */}
                        </View>


                  
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                   

                    <View style={[Theme.w80, Theme.h20]}>
                    <TickTextField
        // onChangeTxt={e => setSeats(e)}
                    placeHolder={'Description'}
       
                    />
                </View>

                <View style={Theme.h2} />


                


                <View style={Theme.h2} />

                <View style={[Theme.w80, Theme.h7]}>
                <TickButton
                onPress={() => navigationGallery()}
                ButtonName={"Add"}
                />
                </View>

                        
                    </View>

                    
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

export default AddGalleryScreen;



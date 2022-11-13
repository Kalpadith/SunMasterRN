import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native'
import Ticketing4 from "../../images/bench.png"
import Ticketing5 from "../../images/lamp.png"
import Ticketing6 from "../../images/light.png"
import Ticketing7 from "../../images/Solar-Panel.png"

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ProductScreen = () => {

    

    const useNavigate = useNavigation();

    const navigationProduct = () => {
        useNavigate.navigate('addproduct');
    }
    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationBack = () => {
        useNavigate.navigate('CompanMenuScreen');
    }

    // const userRegister = () => {
    //     try {
    //         fetch(('https://ticketing-server-app.herokuapp.com/users/adduser'), {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
                    
    //             }),
    //         });
    //         alert('success...!');
    //     } catch (e) {
    //         console.log('error user register...');
    //     }
    // }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Our Products </Text>
                    </View>


                    

                        <View style={[Theme.h2]} />

                        <View style={[Theme.h2]} />

                        <View style={[Theme.w98, Theme.h70, Theme.border1_5, Theme.smoke, Theme.justAlign]}>

                        <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                            <View style={[Theme.dFlexCol]}>
       
                                {<Image source={require('../../images/bench.png')} 
                                style = {{ width: 100, height: 90 }} />}
                            </View>



                        <View style={[Theme.w25, Theme.h100]} />

                            <Text style={[Theme.fWhite, Theme.f08]}> 
                               Bench BN765
        
                            </Text>
                        </View>

                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                        <View style={[Theme.dFlexCol]}>

                        {<Image source={require('../../images/lamp.png')} 
                            style = {{ width: 100, height: 100 }} />}
                        </View>



                        <View style={[Theme.w20, Theme.h100]} />

                        <Text style={[Theme.fWhite, Theme.f08]}> 
                           Lamp of solar LP765
                        </Text>
                        </View>   
                            <View style={Theme.h2} />
                            <View style={Theme.h2} />
                            <View style={Theme.h2} />
                            <View style={Theme.h2} />
                            <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                        <View style={[Theme.dFlexCol]}>

                            {<Image source={require('../../images/light.png')} 
                            style = {{ width: 100, height: 100 }} />}
                        </View>



                        <View style={[Theme.w20, Theme.h100]} />

                        <Text style={[Theme.fWhite, Theme.f08]}> 
                        Power saver light L987

                        </Text>
                        </View>
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />


                        <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                        <View style={[Theme.dFlexCol]}>

                        {<Image source={require('../../images/Solar-Panel.png')} 
                            style = {{ width: 100, height: 100 }} />}
                        </View>



                        <View style={[Theme.w20, Theme.h100]} />

                        <Text style={[Theme.fWhite, Theme.f08]}> 
                        Panel set 345. 
                        

                        </Text>
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
                            <View style={Theme.h2} />

                            <View style={[Theme.w80, Theme.h7]}>
                                <TickButton
                                    onPress={() => navigationProduct()}
                                    ButtonName={"Add more"}
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

export default ProductScreen;
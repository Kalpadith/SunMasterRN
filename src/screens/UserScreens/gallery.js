import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import Ticketing from "../../images/AcL.png"
import Ticketing1 from "../../images/Sugath.png"
import Ticketing2 from "../../images/Maheesh.png"
import Ticketing3 from "../../images/Jehan.png"
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height;

const GalleryScreen = () => {

   
    // const [date, setDate] = useState(null);
    // const [amount, setAmount] = useState(null);



    const useNavigate = useNavigation();

    const navigationGallery = () => {
        useNavigate.navigate('addgallery');
    }
    const navigationLogin = () => {
        useNavigate.navigate('LoginScreen');
        alert('Logged Out Successfully');
    }
    const navigationBack = () => {
        useNavigate.navigate('CompanMenuScreen');
    }
    // var dates = new Date().toDateString();
   
    // const pay = () => {
    //     try {
    //         fetch(('https://ticketing-server-app.herokuapp.com/payments/add'), {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 "payment_date": date,
    //                 "payment_amount": "400.00"
    //             }),
    //         });
    //         alert('Booking Added & Payment Successfull...');
    //         useNavigate.navigate('Mainmenu');
    //     } catch (e) {
    //         console.log('error while booking...');
    //     }
    // }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Gallery </Text>
                    </View>

                   
                        <View style={[Theme.h2]} />

                        <View style={[Theme.h2]} />


                    <View style={[Theme.w98, Theme.h70, Theme.border1_5, Theme.smoke, Theme.justAlign]}>

                    <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                    <View style={[Theme.dFlexCol]}>
                           
                           {<Image source={require('../../images/AcL.png')} 
                           style = {{ width: 100, height: 90 }} />}
                       </View>

                   

                            <View style={[Theme.w25, Theme.h100]} />

                        <Text style={[Theme.fWhite, Theme.f08]}> 
                            Works of ACL group Sri lanka
                            
                        </Text>
                        </View>

                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />

                    <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                    <View style={[Theme.dFlexCol]}>
       
                     {<Image source={require('../../images/Jehan.png')} 
                        style = {{ width: 100, height: 100 }} />}
                    </View>



                    <View style={[Theme.w20, Theme.h100]} />

                    <Text style={[Theme.fWhite, Theme.f08]}> 
                        Works of private apartment.
        
                    </Text>
                    </View>   
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={Theme.h2} />
                        <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                    <View style={[Theme.dFlexCol]}>
       
                        {<Image source={require('../../images/Sugath.png')} 
                        style = {{ width: 100, height: 100 }} />}
                     </View>



                    <View style={[Theme.w20, Theme.h100]} />

                    <Text style={[Theme.fWhite, Theme.f08]}> 
                    Works of Sugath holdings.
        
                    </Text>
                    </View>
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />
                    <View style={Theme.h2} />


                    <View style={[Theme.w80, Theme.h5, Theme.dFlexRow]}>

                    <View style={[Theme.dFlexCol]}>
       
                     {<Image source={require('../../images/Maheesh.png')} 
                        style = {{ width: 100, height: 100 }} />}
                    </View>



                    <View style={[Theme.w20, Theme.h100]} />

                    <Text style={[Theme.fWhite, Theme.f08]}> 
                       Works of Famous cricketer. 
                       
        
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
                        

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationGallery()}
                                ButtonName={"Add more"}
                            />
                        </View>

                        <View style={Theme.h2} />
                    </View>

                    
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

export default GalleryScreen;



import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Powerconsumption2 = () => {

    const [r_user_Fname, setr_user_Fname] = useState(null);
    const [r_user_Lname, setr_user_Lname] = useState(null);
    const [r_user_address, setr_user_address] = useState(null);
    const [r_user_Email, setr_user_Email] = useState(null);
    const [r_user_NIC, setr_user_NIC] = useState(null);
    const [r_package, setr_package] = useState(null);
    const [r_company, setr_company] = useState(null);


    const useNavigate = useNavigation();

    const navigationCalculate = () => {
        useNavigate.navigate('Calculate');
    }


    const userCalculate = () => {
        // try {
        //     fetch(('https://ticketing-server-app.herokuapp.com/users/adduser'), {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             "r_user_Fname": r_user_Fname,
        //             "r_user_Lname": r_user_Lname,
        //             "r_user_address": r_user_address,
        //             "r_user_Email": r_user_Email,
        //             "r_company": r_company,
        //             "r_user_NIC": r_user_NIC,
        //             "r_package": r_package 
        //         }),
        //     });
        //     alert('requseted success...!');
        // } catch (e) {
        //     console.log('error user register...');
        // }
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100, Theme.bgMainj]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Details of power consumption </Text>
                    </View>

                    


                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>
                        
                    <Text style={[Theme.fGray, Theme.f15]}> User Details</Text>
                        
                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_user_Fname(e)}
                                placeHolder={'Kumara Gamage'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_user_Lname(e)}
                                placeHolder={'123456789'}
                            />
                        </View>


                        <View style={Theme.h2} />

                        <Text style={[Theme.fGray, Theme.f15]}> Number of units used in last three months</Text>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_user_address(e)}
                                placeHolder={'100'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_user_Email(e)}
                                placeHolder={'80'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_user_NIC(e)}
                                placeHolder={'90'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <Text style={[Theme.fGray, Theme.f15]}> last three months bill</Text>

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_company(e)}
                                placeHolder={'4500'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_package(e)}
                                placeHolder={'3600'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setr_package(e)}
                                placeHolder={'4050'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => navigationCalculate()}
                                ButtonName={"Calculate"}
                            />
                        </View>

                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Powerconsumption2;
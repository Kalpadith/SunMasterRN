import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
import Theme from "../assets/Theme/Theme";
import TickTextField from "../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const RegisterScreen = () => {

    const [user_Fname, setuser_Fname] = useState(null);
    const [user_Lname, setuser_Lname] = useState(null);
    const [user_type, setuser_type] = useState(null);
    const [user_address, setuser_address] = useState(null);
    const [user_Email, setuser_Email] = useState(null);
    const [user_password, setuser_password] = useState(null);
    const [user_NIC, setuser_NIC] = useState(null);
    const [user_phoneNo, setuser_phoneNo] = useState(null);
    const [ceb_acc, setceb_acc] = useState(null);


    const useNavigate = useNavigation();

    const userRegister = () => {
        try {
            fetch(('http://localhost:5000/users/adduser'), {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "user_Fname": user_Fname,
                    "user_Lname": user_Lname,
                    "user_type": user_type,
                    "user_address": user_address,
                    "user_Email": user_Email,
                    "ceb_acc": ceb_acc,
                    "user_password": user_password,
                    "user_NIC": user_NIC,
                    "user_phoneNo": user_phoneNo
                 
                }),
            });
            alert('success...!');
        } catch (e) {
            console.log('error user register...');
        }
    }

    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100, Theme.bgMainj]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Register </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>

                    {/* <View style={[Theme.dFlexCol]}>
                            {<Image source={require('../images/Ticketing.png')} 
                            style = {{ width: 100, height: 100 }} />}
                        </View> */}
                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_Fname(e)}
                                placeHolder={'First Name'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_Lname(e)}
                                placeHolder={'Last Name'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_type(e)}
                                placeHolder={'User Type'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_address(e)}
                                placeHolder={'Address'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_Email(e)}
                                placeHolder={'Email Address'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_NIC(e)}
                                placeHolder={'NIC'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_password(e)}
                                placeHolder={'Password'}
                                secure={true}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setceb_acc(e)}
                                placeHolder={'CEB Account Number'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickTextField
                                onChangeTxt={e => setuser_phoneNo(e)}
                                placeHolder={'Phone Number'}
                            />
                        </View>

                        <View style={Theme.h2} />

                        <View style={[Theme.w80, Theme.h7]}>
                            <TickButton
                                onPress={() => userRegister()}
                                ButtonName={"Register"}
                            />
                        </View>

                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default RegisterScreen;
import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, LogBox } from "react-native";
import Theme from "../../assets/Theme/Theme";
import TickTextField from "../../common/TickTextField";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TickButton from "../../common/TickButton";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Timetable = () => {

    const [device, adddevice] = useState({
        type: '',
        serial: '',
        ip: '',

    });

    const [loading, setLoading] = useState(false);

    const onChangeType = (value) => {
        adddevice({ ...device, type: value });
    };

    const onChangeSerial = (value) => {
        adddevice({ ...device, serial: value });
    };

    const onChangeIp = (value) => {
        adddevice({ ...device, ip: value });
    };

    const saveData = () => {
        setLoading(true);


        fetch('https://sun-master.herokuapp.com/device/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({
                type: device.type,
                serial: device.serial,
                ip: device.ip,

            }),
        })
            .then((response) => {
                setLoading(false)
                response.text('success');
                alert("Device Added Successfully");
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };




    const useNavigate = useNavigation();

    const navigationBack = () => {
        useNavigate.navigate('Mainmenu');
    }



    return (
        <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
            <View style={[{ height: SCREEN_HEIGHT }]}>
                <View style={[Theme.container, Theme.w100, Theme.h100]}>
                    <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
                        <Text style={[Theme.fWhite, Theme.f20]}> Add New Inverter </Text>
                    </View>
                    <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMain, Theme.justAlign]}>
                    <View style={[Theme.w80, Theme.h10]}>
                    <Text>Device Type</Text> 
                    <TickTextField
                                onChangeText={(value) => onChangeSerial(value)}
                                placeHolder={'Enter the type of inverter'}
                                style={styles.input}
                            />
                        </View>
                        <View style={[Theme.w80, Theme.h10]}>
                            <Text>Serial NO</Text>
                            
                             <TickTextField
                                onChangeText={(value) => onChangeSerial(value)}
                                placeHolder={'Enter the serial Number'}
                                style={styles.input}
                            />
                        </View>
                        <View style={[Theme.w80, Theme.h10]}>
                        <Text>RF control IP</Text>
                        <TickTextField
                                onChangeText={(value) => onChangeSerial(value)}
                                placeHolder={'Enter the IP address of RF control'}
                                style={styles.input}
                            />
                        </View>
                        
                        <TouchableOpacity style={[Theme.w80, Theme.h10]} onPress={saveData}>
                            <View style={{ backgroundColor: 'blue', padding: 10 }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>
                                    {loading ? 'Loading...' : 'Add'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>

    );
}

export default Timetable;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 8,
        margin: 15,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
    },
});
// import React, { useEffect, useState } from "react";
// import { View, Text, Dimensions, TouchableOpacity, LogBox } from "react-native";
// import Theme from "../assets/Theme/Theme";
// import TickTextField from "../common/TickTextField";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import TickButton from "../common/TickButton";
// import { useNavigation } from "@react-navigation/native";
// import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";

// import axios from 'axios';

// const SCREEN_HEIGHT = Dimensions.get('window').height;

// const Viewrequest = () => {

//     // const [r_user_Fname, setr_user_Fname] = useState(null);
//     // const [r_user_Lname, setr_user_Lname] = useState(null);
//     // const [r_user_address, setr_user_address] = useState(null);
//     // const [r_user_Email, setr_user_Email] = useState(null);
//     // const [r_user_NIC, setr_user_NIC] = useState(null);
//     // const [r_package, setr_package] = useState(null);
//     // const [r_company, setr_company] = useState(null);


//     const useNavigate = useNavigation();

//     // const [list,setList] = useState([]);
//     // useEffect(()=>{
//     //     getPixelSizeForLayoutSize()
//     // },[])

//     // const getList=()=>{
//     //     axios({
//     //         url:"http://localhost:5000/requests/add",
//     //         method:"GET"
//     //     }).then((res)=>{
//     //         var response = res.data;
//     //         setList(response.data)
//     //     })
//     // }

//     return (
//         <KeyboardAwareScrollView style={[{ height: SCREEN_HEIGHT }]}>
//             <View style={[{ height: SCREEN_HEIGHT }]}>
//                 <View style={[Theme.container, Theme.w100, Theme.h100, Theme.bgMainj]}>
//                     <View style={[Theme.w98, Theme.h7, Theme.justAlign]}>
//                         <Text style={[Theme.fWhite, Theme.f20]}> Requests</Text>
//                     </View>
//                     {/* <View style={[Theme.w98, Theme.h90, Theme.border1_5, Theme.bgMainj, Theme.justAlign]}>
//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickTextField
//                                 onChangeTxt={e => setr_user_Fname(e)}
//                                 placeHolder={'First Name'}
//                             />
//                         </View>

//                         <View style={Theme.h2} />

//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickTextField
//                                 onChangeTxt={e => setr_user_Lname(e)}
//                                 placeHolder={'Last Name'}
//                             />
//                         </View>

//                         <View style={Theme.h2} />

//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickTextField
//                                 onChangeTxt={e => setr_user_address(e)}
//                                 placeHolder={'Address'}
//                             />
//                         </View>

//                         <View style={Theme.h2} />

//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickTextField
//                                 onChangeTxt={e => setr_user_Email(e)}
//                                 placeHolder={'Email Address'}
//                             />
//                         </View>

//                         <View style={Theme.h2} />

//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickTextField
//                                 onChangeTxt={e => setr_user_NIC(e)}
//                                 placeHolder={'NIC'}
//                             />
//                         </View>

//                         <View style={Theme.h2} />

//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickTextField
//                                 onChangeTxt={e => setr_company(e)}
//                                 placeHolder={'company'}
//                             />
//                         </View>

//                         <View style={Theme.h2} />

//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickTextField
//                                 onChangeTxt={e => setr_package(e)}
//                                 placeHolder={'Investable amount'}
//                             />
//                         </View> */}

//                         <View style={Theme.h2} />

//                         <View style={[Theme.w80, Theme.h7]}>
//                             <TickButton
//                                 onPress={() => userRegister()}
//                                 ButtonName={"update/delete"}
//                             />
//                         </View>

//                     </View>
//                 </View>
//             {/* </View> */}
//         </KeyboardAwareScrollView>
//     )
// }

// export default Viewrequest;
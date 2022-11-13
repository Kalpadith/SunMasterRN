//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  const [device, setDevice] = useState({
    type: item.type,
    serial: item.serial,
    ip: item.ip,
   
  });

  const onChangeType = (value) => {
    setDevice({ ...device, type: value });
  };

  const onChangeSerial = (value) => {
    setDevice({ ...device, serial: value });
  };

  const onChangeIp = (value) => {
    setDevice({ ...device, ip: value });
  };

  

  const updateData = () => {
    

    fetch('https://sun-master.herokuapp.com/device/'+item.id, {
      method: 'PATCH',
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
        response.text();
        navigation.push('Gets')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    

    fetch('https://sun-master.herokuapp.com/device/'+item.id, {
      method: 'DELETE',
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
        response.text();
        navigation.push('Gets')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Inverter Type'}
        onChangeText={(value) => onChangeType(value)}
        style={styles.input}
        value={device.type}
      />
      <TextInput
        placeholder={'Serial NO'}
        onChangeText={(value) => onChangeSerial(value)}
        style={styles.input}
        value={device.serial}
      />
      <TextInput
        placeholder={'RF IP address'}
        onChangeText={(value) => onChangeIp(value)}
        style={styles.input}
        value={device.ip}
      />
      

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Update</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Hapus</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

//make this component available to the app
export default Detail;

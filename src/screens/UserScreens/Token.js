//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// create a component
const Gets = ({ navigation }) => {
  const [device, setDevice] = useState();

  const getUserData = async () => {
    try {
      let response = await fetch('https://sun-master.herokuapp.com/device/get');
      let json = await response.json();
      setDevice(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getUserData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Details', {
        item: item
      })}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
          }}>
          <Text >{item.type}</Text>
          <Text>{item.serial}</Text>
          <Text>{item.ip}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={device}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Gets;

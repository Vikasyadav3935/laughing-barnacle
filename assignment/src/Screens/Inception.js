import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';
import { View, Text,TextInput,TouchableOpacity ,ScrollView,PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Inception() {
  const [permit, setPermit] = useState();
  const [data, setdata] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Choice A', value: 'choiceA' },
    { label: 'Choice B', value: 'choiceB' },
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    { label: 'Item X', value: 'itemX' },
    { label: 'Item Y', value: 'itemY' },
  ]);
  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    console.log(result);
    if (result.didCancel) {
    } else {
      setdata(result);
    }
  };


  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ScrollView style={{width:'95%',alignSelf:'center'}}>
      <Text style={{ alignSelf: 'center', padding: 5,fontSize:20 }}>Inspection Details</Text>
      
      <Text style={{marginHorizontal:10,marginTop:20}}>Select work
      </Text>
      <DropDownPicker
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
      />
      
      <Text style={{marginHorizontal:10,marginTop:20}}>Select Inspection Stage</Text>
      <DropDownPicker
        open={open2}
        value={value2}
        items={items2}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems2}
      />

      <Text style={{marginHorizontal:10,marginTop:20}}>Activities</Text>
      <DropDownPicker
        open={open3}
        value={value3}
        items={items3}
        setOpen={setOpen3}
        setValue={setValue3}
        setItems={setItems3}
      />
      <View style={{marginTop:10}}>
        <View style={{}}>
          <Text style={{color:'black'}}>Rating:-</Text>
          <TextInput placeholder='Rating' style={{borderWidth:1,borderColor:'black',width:100,height:40}}  />
        </View>
        <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 1,
          marginTop: 30,
          borderRadius: 10,
          backgroundColor: '#aa1d',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={requestCameraPermission}>
        <Text style={{color: '#ffff'}}>Pick Image</Text>
      </TouchableOpacity>
      <View style={{height:300,width:'92%',alignSelf:'center',marginTop:20,borderWidth:.5}}>
     {  data!==null ? <Image source={{uri:data.assets[0].uri}} style={{width:'100%',height:'100%'}}  />:''}
      </View>
      
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 1,
          marginVertical: 30,
          borderRadius: 10,
          backgroundColor: '#a1d',
          justifyContent: 'center',
          alignItems: 'center',
        }}
       >
        <Text style={{color: '#ffff'}}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

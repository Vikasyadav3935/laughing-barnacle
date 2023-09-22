import { View, Text,StyleSheet, TouchableOpacity, Modal,Image,TextInput } from 'react-native'
import React,{useState} from 'react';
import * as Progress from 'react-native-progress';

const Task = ({item}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [commentText, setCommentText] = useState('');
  
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
    const handleCommentSubmit = () => {
        
        setCommentText('');
        toggleModal();
      };
  return (
    <View style={styles.topview}>
        <View style={{marginVertical:5}}>
      <Text style={{fontSize:18,color:'#da2c'}}>{item.title}</Text>
      <View style={styles.time}>
      <Text>Start Date:-{item.startTime} </Text>
      <Text>End Date:-{item.endTime}</Text>
      </View>
      <View style={{width:200,marginVertical:10}}>
       <Text style={{alignSelf:'center'}}>{item.percentageComplete}% complete</Text>
      <Progress.Bar progress={item.percentageComplete/100} width={200} />
      </View>
      
      </View>
      <TouchableOpacity  onPress={toggleModal} style={{marginVertical:5,backgroundColor:'blue',height:50,justifyContent:'center',alignItems:'center',borderRadius:20,padding:4}}>
        <Text style={{color:'white'}}>Comment</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={{uri:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}} // Replace with your image path
              style={styles.commentImage}
            />
            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment..."
              multiline={true}
              value={commentText}
              onChangeText={(text) => setCommentText(text)}
            />
            <TouchableOpacity  onPress={handleCommentSubmit}>
              <Text style={{color:'black'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
       
    </View>
  )
}
const styles=StyleSheet.create({
    topview:{
    width:'95%',
    alignSelf:'center',
    borderWidth:.4,
    borderColor:'black',
    
    marginVertical:5,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    elevation:5

    },
    time:{
        flexDirection:'row',
    }, 
     modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
      },
      commentImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginBottom: 10,
      },
      commentInput: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
})

export default Task
import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Task from './src/Task'


const App = () => {
  const task =[
   {
    id:1,
    title:'Foundation Work',
    startTime:'10/12/2022',
    endTime:'12/2/2023',
    percentageComplete:40
   },
   {
    id:2,
    title:'Wireing Work',
    startTime:'10/12/2022',
    endTime:'12/2/2023',
    percentageComplete:90
   },
   {
    id:3,
    title:'Foundation Work',
    startTime:'10/12/2022',
    endTime:'12/2/2023',
    percentageComplete:30
   },
   {
    id:4,
    title:'Foundation Work',
    startTime:'10/12/2022',
    endTime:'12/2/2023',
    percentageComplete:10
   },
   {id:5,
    title:'Plastering Work',
    startTime:'10/12/2022',
    endTime:'12/2/2023',
    percentageComplete:30
   },
   {
    id:6,
    title:'Foundation Work',
    startTime:'10/12/2022',
    endTime:'12/2/2023',
    percentageComplete:40
   },
   {
    id:7,
    title:'Foundation Work',
    startTime:'10/12/2022',
    endTime:'12/2/2023',
    percentageComplete:70
   }
  ]
  return (
    <View style={{marginBottom:10}}>
      <Text style={{alignSelf:'center',fontSize:22,margin:5,fontWeight:'700',color:"#c1a"}}>Construction Site Task</Text>
      <FlatList
      data={task}
      renderItem={({item})=><Task item={item}/>}
      keyExtractor={item => item.id}
      />


    
    </View>
  )
}

export default App
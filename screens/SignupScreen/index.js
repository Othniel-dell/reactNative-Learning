import { StyleSheet, Text, View, TextInput, Button ,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.View}>
          <View imageContainer>
           <Image source={require("../intra.png")} style= {{ position:"absolute",marginLeft: -250, marginTop: -10}}/>
          </View>

      <View style={styles.header1}>
        <Text style={{color: "orange", fontSize: 50, fontStyle: 'italic', alignItems: 'center' }}>Internet House </Text>
      </View>

      <View style={styles.header2}>
        <Text style={{color: "orange", fontSize: 50, marginLeft: 120, fontStyle: 'italic' }}>3D Wireless </Text>
      </View>

      <View style={styles.header3}>
        <Text style={{color: "orange", fontSize: 50,marginLeft: 250, fontStyle: 'italic'}}>Plus </Text>
      </View>

      <View style={styles.NameInput1}>
        <TextInput placeholder='Account ID'/>
      </View>

      <View style={styles.NameInput2}>
        <TextInput placeholder='Phone Number'/>
      </View>

      <View style={styles.NameInput3}>
        <TextInput placeholder='Date Of birth'/>
      </View>

      <View style={styles.AddressInput5}>
        <Button title='SUBMIT' color={'orange'} onPress={()=>navigation.navigate("Home")}/>
      </View>
    </View>

  )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  NameInput1:{
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 20,     
    width: 350,
    marginBottom: 1,
    padding: 15,
    textShadowRadius: 10,
  },
  NameInput2:{
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 1,
    margin: 20,     
    width: 350,
    padding: 15,
    textShadowRadius: 10,
  },
  NameInput3:{
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 20,     
    width: 350,
    padding: 10,
    textShadowRadius: 10,
  },
  AddressInput5:{
    backgroundColor: "#1515",
    marginVertical: 10,
    marginHorizontal: 18,
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 30,     
    width: 350,
    padding: 5,
    textShadowRadius: 10,
  },

})

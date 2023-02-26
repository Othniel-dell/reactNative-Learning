import * as React from 'react';
import { View, Button, StyleSheet, TextInput, Image } from 'react-native';


 export const HomeScreen =({navigation})=> {
  return (
    <View >
        <View style={styles.HomeView}>
         <View imageContainer>
          <Image source={require("../../assets/intra.png")} style= {{ position:"absolute",marginLeft: -250 }}/>
        </View>
        
        <View style={styles.TextView2}>
          <Image source={require("../../assets/favicon.png")} style= {{ position:"absolute",flex: 1, left: 100, height: 150, marginVertical: 130, marginLeft: -130, width: 150, }}/>
        </View>
        <View style={styles.TextID}>
          <TextInput placeholder='Username or ID'/>
        </View>
        <View style={styles.TextSty}>
          <TextInput placeholder='Enter Password'/>
        </View>
       <View style={styles.LoginView}>
          <Button color={'orange'} title='Login' onPress={()=>navigation.navigate("Login")}/>
       </View>   
       <View style={styles.SignupView}>
          <Button color={'orange'} title='SignUP' onPress={()=>navigation.navigate("SignUP")} />
       </View>       
       
       </View>
    </View>
  );
}



const styles = StyleSheet.create({
  HomeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    alignContents:'center',
    position: 'absolute',
  },

  TextView2:{
    color: 'orange',
    flex: 1,
    marginBottom: 196,
    marginTop: -55,
    padding: 50,
    weight : 400,
    opacity: 0.5

  },
  SignupView:{
    backgroundColor: "black",
    width : 100,
    padding: 1,
    marginBottom: 300,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    opacity: 2,
    alignItems: 'center',
        
  },
  LoginView:{
    backgroundColor: "black",
    width : 250,
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    alignItems: 'center',
    borderRadius: 30,
    textShadowRadius: 10,
  },
  TextID: {
    backgroundColor: "white",
    paddingHorizontal: 9,
    borderRadius: 10,
    margin: 9,     
    marginLeft: 40,
    
    width: 350,
    padding: 10,
    textShadowRadius: 10,
  },
  TextSty: {
    backgroundColor: "white",
    paddingHorizontal: 9,
    borderRadius: 10,
    width: 350,
    
    marginLeft: 40,
    padding: 10,
    margin: 9,    
  },
    
})
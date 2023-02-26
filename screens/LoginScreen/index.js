import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { Header } from "../../components/Header";
import { Boxes } from "../../components/Boxes";


export const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Boxes navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

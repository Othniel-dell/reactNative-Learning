import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export const Header = ({ navigation }) => {
  return (
    <View style={styles.Header}>
      
        <View style={[styles.SmallBox,styles.SmallBox1]}>
          <TouchableOpacity>
              <Text style={styles.UserName}>Thomson Ezra Davidson Emmanuel </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.UserID}>Account ID : EC1258</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SmallBox}>
          <TouchableOpacity>
            <View style={styles.SecondHeader}>
              <Text>GH₵ 0</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.Button}>
            <Button 
              color="blue"
              title="View History"
              onPress={() => navigation.navigate("History")}
            />
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
 Header:{
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap : 20,
    justifyContent: "space-between",
    height: "10%",
    padding: 20,
 },
 SmallBox:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
 },
 UserName:{
    color: "pink"
 },
 UserID:{
    color: "lightgrey"
 },
 Button:{
    backgroundColor: "gray",
    fontSize: 12,
    padding: "5, 10",
    borderRadius: 10,
 },

});

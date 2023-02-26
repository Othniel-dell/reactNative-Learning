import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const Boxes = ({navigation}) => {
    return (
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box1}>
          
            <View style={styles.BoxIn}></View>
            <Button
              color="black"
              title="Internet Bills"
              onPress={() => navigation.navigate("InternetBills")}
            />
            <Text styles={{ width: "bold", color: "orange" }}>
              Internet Bills
            </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.box2}>
          
            <View style={styles.BoxIn}></View>
            <Button
              color="black"
              title="Internet Installation"
              onPress={() => navigation.navigate("Installation")}
            />
            <Text> Request for installation and Relocation</Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.box3}>
         
            <View style={styles.BoxIn}></View>
            <Button
              color="black"
              title="Internet Usage Graph"
              onPress={() => navigation.navigate("UsageGraph")}
            />
            <Text> Usage Graph</Text>
         
        </TouchableOpacity>

        <TouchableOpacity style={styles.box4}>
          
            <View style={styles.BoxIn}></View>
            <Button
              color="black"
              title="Customer Services"
              onPress={() => navigation.navigate("customer")}
            />
            <Text> Contact Customer Services</Text>
        </TouchableOpacity>
      </View>
    );
  };


  const styles = StyleSheet.create({
      boxContainer: {
       display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gridGap: 20,
     backgroundColor: "red",     
     boxSizing: "border-box",
    },
    box1: {
        width: "47%",
        backgroundColor: "red",
        gridRow: 1,
        gridColumn: 1,
      },
      box2: {
        width: "47%",
        backgroundColor: "green",
        gridRow: 1,
        gridColumn: 2,
      },
      box3: {
        width: "47%",
        backgroundColor: "blue",
        gridRow: 2,
        gridColumn: 1,
      },
      box4: {
        width: "47%",
        backgroundColor: "yellow",
        gridRow: 2,
        gridColumn: 2,
      },
  
  });



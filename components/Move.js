import { View, Text, Button,StyleSheet } from "react-native";

export default function Move() {
  return (
    <View style={styles.move}>
      <Text style={styles.moveNum}>0.</Text>
      <Button title="Go to game start" />
    </View>
  );
}

const styles= StyleSheet.create({
    move:{
        flexDirection:'row',
        alignItems:'center'
    },
    moveNumber:{
        width:15
    }

})

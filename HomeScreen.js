import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function HomeScreen({ navigation }) {

  const handleScreenOne = () => {
    navigation.navigate("Details1");
  };

  const handleScreenTwo = () => {
    navigation.navigate("Details2");
  };

  const handleScreenThree = () => {
    navigation.navigate("Details3");
  };

  const handleScreenFour = () => {
    navigation.navigate("Details4");
  };

  const styles = StyleSheet.create({
    item: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 24,
      padding: 30,
      backgroundColor: "pink",
      fontSize: 24,
    },
  });

  return (
    <View>
      <TouchableOpacity onPress={handleScreenOne}>
        <Text style={styles.item}>item1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleScreenTwo}>
        <Text style={styles.item}>item2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleScreenThree}>
        <Text style={styles.item}>item3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleScreenFour}>
        <Text style={styles.item}>item4</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
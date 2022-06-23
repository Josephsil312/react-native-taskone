import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList } from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Details1");
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
//     handlePress1 is not a good name.
        <TouchableOpacity onPress={handlePress1}>
          <Text style={styles.item}>item1</Text>
          <Text style={styles.item}>item2</Text>
          <Text style={styles.item}>item3</Text>
          <Text style={styles.item}>item4</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function DetailsScreen1() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View>
    // you have to show diifrent image on diffrent item clicked
    // you have to pass the data from screen 1 to screen two.
        <Image
          style={{ height: 300, width: 300, marginTop: 30 }}
          source={require("./assets/image-stand-out.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    width:300,
  },
});

const Stack = createNativeStackNavigator();
// Move Diffrent componets to diffrent files
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details1" component={DetailsScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

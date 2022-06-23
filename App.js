import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import Screenone from "./screens/Screenone";
import Screentwo from "./screens/ScreenTwo";
import Screenthree from "./screens/Screenthree";
import Screenfour from "./screens/Screenfour";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details1" component={Screenone} />
        <Stack.Screen name="Details2" component={Screentwo} />
        <Stack.Screen name="Details3" component={Screenthree} />
        <Stack.Screen name="Details4" component={Screenfour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Scenary from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
  },
  Scenary: {
    screen: Scenary,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

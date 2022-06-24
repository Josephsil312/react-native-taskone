import { Image, View } from "react-native";
import { globalStyles, images } from "../styles/global";

export default function Scenary ({ navigation }) {
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      <Image style={globalStyles.tinyLogo} source={images.ratings[rating]} />
    </View>
  );
}

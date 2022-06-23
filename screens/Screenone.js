import React from "react";
import { View, Image } from "react-native";

function Screenone() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View>
        <Image
          style={{ height: 300, width: 300,marginTop:30 }}
          source={require("../assets/image-header.jpg")}
        />
      </View>
    </View>
  );
}
export default Screenone;

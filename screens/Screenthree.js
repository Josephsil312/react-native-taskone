import React from "react";
import { View, Image } from "react-native";

function Screenthree() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View>
          <Image
            style={{ height: 300, width: 300, marginTop: 30 }}
            source={require("./assets/image-transform.jpg")}
          />
        </View>
      </View>
    );
  }
  export default Screenthree
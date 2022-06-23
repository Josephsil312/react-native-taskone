import React from "react";
import { View, Image } from "react-native";

function Screentwo() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View>
          <Image
            style={{ height: 300, width: 300, marginTop: 30 }}
            source={require("./assets/image-stand-out.jpg")}
          />
        </View>
      </View>
    );
  }

  export default Screentwo;
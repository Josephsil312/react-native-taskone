import 'react-native-gesture-handler';
import React, { useState } from "react";

import Navigator from "./routes/HomeStack";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return <Navigator />;
}

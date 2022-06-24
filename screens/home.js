import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Title1",
      rating: 1,
      key: "1",
    },
    {
      title: "Title2",
      rating: 2,
      key: "2",
    },
    {
      title: "Title3",
      rating: 3,
      key: "3",
    },
    {
      title: "Title4",
      rating: 4,
      key: "3",
    },
    {
      title: "Title5",
      rating: 5,
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Scenary", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

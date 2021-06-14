import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header";
import LocationBar from "./Components/LocationBar";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "All",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Recently Viewed",
    width: "150",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Recommendations",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b6",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f67",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d79",
    title: "Third Item",
  },
];

const App = () => {
  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={{
          maxWidth: 200,
          height: 30,
          padding: 10,
          backgroundColor: "#696969",
          marginHorizontal: 5,
          marginVertical: 5,
          borderRadius: 5,

          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center", color: "#fff" }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <Header />
      <ScrollView>
        <LocationBar />

        <View style={{ backgroundColor: "#000", borderBottomWidth: 0.5 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={{ fontSize: 100 }}>
          helfasdfhhdsfhdsfksfjsdfskfsfhsdfskfsfhksfsdhfsshhgkdfkjgdfhghgkdhfghgh
          helfasdfhhdsfhdsfksfjsdfskfsfhsdfskfsfhksfsdhfsshhgkdfkjgdfhghgkdhfghgh
          helfasdfhhdsfhdsfksfjsdfskfsfhsdfskfsfhksfsdhfsshhgkdfkjgdfhghgkdhfghgh
        </Text>
      </ScrollView>

      <StatusBar style="dark" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

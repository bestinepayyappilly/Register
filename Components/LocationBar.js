import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LocationBar = () => {
  return (
    <View>
      <View
        style={{
          height: 45,
          width: "100%",
          backgroundColor: "#fff",
          padding: 10,
          flexDirection: "row",
          borderBottomWidth: 0.5,
        }}
      >
        <Image
          source={require("../assets/maps-and-flags.png")}
          style={{ height: 25, width: 25 }}
        />
        <Text style={{ fontSize: 18, marginLeft: 5, width: 200 }}>
          Chalakudy, Anamala Rd.
        </Text>
        <View
          style={{
            alignSelf: "center",
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: "#000",
            margin: 5,
          }}
        ></View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 5,
            color: "#E50914",
            fontWeight: "700",
          }}
        >
          Change
        </Text>
      </View>
    </View>
  );
};

export default LocationBar;

const styles = StyleSheet.create({});

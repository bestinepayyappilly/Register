import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const LocationBar = () => {
  return (
    <View>
      <View
        style={{
          height: 35,
          width: "100%",
          backgroundColor: "#fff",
          padding: 10,
          flexDirection: "row",
          borderBottomWidth: 0.5,
        }}
      >
        <Image
          source={require("../assets/maps-and-flags.png")}
          style={{ height: 20, width: 20, alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 15,
            marginLeft: 5,
            width: 170,
            alignSelf: "center",
          }}
        >
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
        <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => {}}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
              color: "#000",
              fontWeight: "700",
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationBar;

const styles = StyleSheet.create({});

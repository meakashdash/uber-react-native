import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { SvgUri } from "react-native-svg";
import { UberCar } from "../assets/uber-car";
import { UberFood } from "../assets/uber-food";
import Car from "../assets/Car.svg";
import FastFood from "../assets/FastFood.svg";

const navData = [
  {
    id: "1",
    name: "Find a Car",
    image: Car,
    screen: "MapScreen",
  },
  {
    id: "2",
    name: "Order Food",
    image: FastFood,
    screen: "OrderFood",
  },
];

const NavOptions = () => {
  return (
    <>
      <FlatList
        data={navData}
        horizontal
        keyExtractor={(item) => item.id}
        style={tw`pl-9`}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`p-2 pt-4 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
            {/* <Image
              style={{ width: 50, height: 50, resizeMode: "contain" }}
              source={{ uri: item.image }}
            /> */}
            <SvgUri
              width={50} // Adjust the width as needed
              height={50} // Adjust the height as needed
              uri={item.image} // Pass the imported SVG as uri
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <SvgUri
              width={50} // Adjust the width as needed
              height={50} // Adjust the height as needed
              uri={Car} // Pass the imported SVG as uri
            />
    </>
  );
};

const styles = StyleSheet.create({});

export default NavOptions;

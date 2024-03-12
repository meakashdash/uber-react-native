import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { UberCar } from '../assets/uber-car';
import { UberFood } from '../assets/uber-food';

const navData=[
    {
        id:"1",
        name:"Find a Car",
        image:UberCar,
        screen:"MapScreen"
    },
    {
        id:"2",
        name:"Order Food",
        image:UberFood,
        screen:"OrderFood"
    }
]

const NavOptions = () => {
    return (
        <FlatList 
            data={navData}
            horizontal
            keyExtractor={(item)=>item.id}
            style={tw`pl-9`}
            renderItem={({item})=>(
                <TouchableOpacity style={tw`p-2 pt-4 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
                    <Image
                        style={{width:100,height:100,resizeMode:'contain'}}
                        source={{
                            uri:item.image
                        }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({})

export default NavOptions;

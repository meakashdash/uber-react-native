import React from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {UberLogo} from '../assets/uber-logo.js'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions.js';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View style={tw`p-10 items-center`}>
                <Image
                    style={{ 
                        width: 100, 
                        height: 100,
                    }}
                    source={{
                        uri:UberLogo
                    }}
                />
            </View>
            <NavOptions />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default HomeScreen;

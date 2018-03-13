// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText='Kinder clothes'/>
            <AlbumList/>
        </View>
    );
};

/* Render it to the Device*/
AppRegistry.registerComponent('albums', () => App);


//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);


//import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

 
//create component

const App = () => (
    <View>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
);

//render
AppRegistry.registerComponent('albums', () => App);

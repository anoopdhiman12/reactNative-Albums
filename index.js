
//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);


//import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

 
//create component

const App = () => (
    <Header />
);

//render
AppRegistry.registerComponent('albums', () => App);

//import libraries to make components
import React from 'react';
import { Text, View } from 'react-native';
//make component

const Header = () => {

    const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
  <Text style={textStyle}>Albums</Text>
  </View>
  );
    };

//styling
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20
    }
};

//make component available for other parts
export default Header;

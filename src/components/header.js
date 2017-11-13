//import libraries to make components
import React from 'react';
import { Text, View } from 'react-native';
//make component

const Header = (props) => {

    const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
  <Text style={textStyle}>{props.headerText}</Text>
  </View>
  );
    };
    

//styling
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20
    }
};

//make component available for other parts
export default Header;

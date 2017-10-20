import React, {Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
componentWillMount() {
    console.log('component will mount done');
}
    render() {
    return (
        <View>
            <Text>AlbumList</Text>
        </View>
    );
}
}

export default AlbumList;

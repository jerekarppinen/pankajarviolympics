import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Button
} from "react-native";
import List from './List';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Button
	                onPress = {() => this.props.navigation.navigate('Participants')}
                    title='Osallistujat'
	              />
                <List navigation = {this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    text: {
       color: '#4f603c'
    }
 })
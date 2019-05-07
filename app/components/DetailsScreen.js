import React from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

const BLUE = '#428AF8';
const LIGHT_GRAY = '#D3D3D3';

export default class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gamerPlaceholder: 'Kirjoita tähän osallistuja',
            gamerPointsPlaceholder: 'Kirjoita tähän tulos'
        }
    }

    handleFocus = event => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    handleBlur = event => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    render() {
    
        const { isFocused } = this.state;

        const { navigation } = this.props;
        const sport = navigation.getParam('sport');
        console.log('sport', sport)
  
        return (
            <View style={styles.NewGamerContainer}>
            <TextInput
                style={styles.NewGamerInput}
                onChangeText={ (text) => this.setState({text}) }
                value={this.state.gamerPlaceholder}
                selectionColor={BLUE}
                underlineColorAndroid={
                    isFocused ? BLUE : LIGHT_GRAY
                }
            />
            <TextInput
                style={styles.NewGamerInput}
                onChangeText={ (text) => this.setState({text}) }
                value={this.state.gamerPointsPlaceholder}
                selectionColor={BLUE}
                underlineColorAndroid={
                    isFocused ? BLUE : LIGHT_GRAY
                }
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    NewGamerContainer: {
        // backgroundColor: 'lightgrey',
        margin: 15,
        flexDirection: 'row',
        // alignItems: 'flex-end',
        height: 66,
        // alignSelf: 'stretch'
        justifyContent: 'center',
    },
    NewGamerInput: {
        flex: 1,
        height: 40,
        paddingLeft: 6
    }
});
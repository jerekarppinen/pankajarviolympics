import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from "react-native";
import { 
    Icon
} from 'react-native-elements';
import { SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');

const BLUE = '#428AF8';
const LIGHT_GRAY = '#D3D3D3';

export default class ParticipantsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gamerPlaceholder: '',
            playerName: ''
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

    onPress() {
        db.transaction(tx => {
            tx.executeSql(
              'INSERT INTO participants (name) VALUES (?)',
              [this.state.playerName],
              (tx, results) => {
                  console.log('Results', results)
              }
            );
          });
    }


    render() {

        const { isFocused } = this.state;

        return (
            <View style={styles.NewGamerContainer}>
                <TextInput
                    style={styles.NewGamerInput}
                    onChangeText={ (playerName) => this.setState({playerName}) }
                    selectionColor={BLUE}
                    underlineColorAndroid={
                        isFocused ? BLUE : LIGHT_GRAY
                    }
                />
                <Icon
                    name='plus'
                    type='font-awesome'
                    color='green'
                    onPress={ () => this.onPress() }
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
import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './app/components/HomeScreen';
import DetailsScreen from './app/components/DetailsScreen';
import ParticipantsScreen from './app/components/ParticipantsScreen';
import { SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Participants: ParticipantsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists participants (id integer primary key not null, points int, name text);'
      );
    });
  }

  render() {
    return <AppContainer />;
  }
}

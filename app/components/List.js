import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import items from '../data/sports.json';
import { Constants } from 'expo'

class List extends React.Component {

	render() {
	  return (
	     <View>
	     <Text style = {styles.pickSport}>
	     	Valitse laji:
	     </Text>
	        {
	           items.map((item, index) => (
	              <TouchableOpacity
	                 key = {index}
	                 style = {styles.container}
	                 onPress = {() => this.props.navigation.navigate('Details', {
	                 	sport: item
	                 })}>
	                 <Text style = {styles.text}>
	                    {item.name}
	                 </Text>
	              </TouchableOpacity>
	           ))
	        }
	     </View>
	  )
	}
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 15,
      marginTop: 5,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   },
   pickSport: {
   	marginTop: Constants.statusBarHeight,
   	fontSize: 20,
   	fontWeight: 'bold'
   }
})
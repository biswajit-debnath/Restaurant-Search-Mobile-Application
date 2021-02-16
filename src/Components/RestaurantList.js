import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SingleRestaurant from './SingleRestaurant';

const RestaurantList = ({ title, results }) => {
	const navigation = useNavigation();

	if(!results.length){
		return null;
	}
	return(
		<View style={Styles.Container}>
			<Text style={ Styles.Title}>{title}</Text>
			<FlatList 
			horizontal
			showsHorizontalScrollIndicator={false}
			data={results}
			keyExtractor={(result) => result.id}
			renderItem={({ item }) =>{
				 return (
				 	<TouchableOpacity onPress={()=> navigation.navigate('Details',
				 		{ id: item.id,
				 		  title: item.name
				 		})}>
				 		<SingleRestaurant result={item}/>
				 	</TouchableOpacity>
				 );
			}}
			/>
		</View>
	);
};


const Styles = StyleSheet.create({
	Container:{
		marginBottom:10
	},
	Title:{
		marginLeft:15,
		fontSize:18,
		fontWeight: 'bold',
		marginBottom: 5
	}
})

export default RestaurantList;
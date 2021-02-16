import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const SingleRestaurant = ({ result }) => {
	return(
		<View style={styles.Container}>
			<Image style={styles.Image} source={{ uri:result.image_url }}/>
			<Text style={styles.Name}>{result.name}</Text>
			<Text >{result.rating} Starts, {result.review_count} Reviews</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	Container: {
		marginLeft:15
	},
	Image: {
		width: 250,
		height:120,
		borderRadius:5
	},
	Name: {
		fontWeight: 'bold'	
	}
});

export default SingleRestaurant;
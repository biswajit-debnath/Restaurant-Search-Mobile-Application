import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons'

const RestaurantDetail = ({ route, navigation }) => {
	const { id } = route.params;
	const [details,setDetails]= useState(null)
	

	const getdetails =async (id) => {
		const response = await yelp.get(`/${id}`);
		setDetails(response.data);
	};

	useEffect(()=>{
		getdetails(id);
	},[]);


	if(!details){
		return null;
	}

	return(
		<ScrollView style={{flex:1}}>
			<View style={Styles.Container}>
				<FlatList
				horizontal
				showsHorizontalScrollIndicator={false} 
				data={details.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={Styles.Image} source={{uri: item}}/>;
				}}
				/>
				<View style={Styles.Rating_Review}>
					<AntDesign name="star" size={18} color="gold" />
					<Text> {details.rating} Rating</Text>
					<FontAwesome 
					name="pencil-square-o"
					size={18}
					color="black"
					style={{marginLeft:110}} />
					<Text> {details.review_count} Reviews</Text>			
				</View>
				<Text style={{ marginLeft:10, marginTop:10}}>Phone No: {details.phone}</Text>
				<View style={Styles.Category_Container}>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false} 
						data={details.categories}
						keyExtractor={(Category) => Category.alias}
						renderItem={({ item }) => {
							return <Text style={Styles.Category}> {item.alias} </Text>;
						}}
					/>
				</View>

				{details.is_closed ? <Text style={Styles.Close}>Close</Text>:<Text style={Styles.Open}>Open</Text>}
				
			</View>
			<Entypo style={Styles.Address} name="address" color="black" />
			<Text style={Styles.Address}>{details.location.display_address[0]}</Text>
			<Text style={Styles.Address}>{details.location.display_address[1]}</Text> 
		</ScrollView>
	);

};


const Styles = StyleSheet.create({
	Container:{
		
		backgroundColor: 'white'
	},
	
	Image: {
		marginTop:10,
		marginLeft:10,
		marginBottom:10,
		height:200,
		width:300
	},

	Rating_Review: {
		alignItems:'center',
		marginLeft:10,
		flexDirection:'row'
	},
	Category_Container:{
		flexDirection:'row',
		marginTop:10,
		marginBottom:15
	},
	Category: {
		marginLeft:10,
		color:'white',
		padding:3,
		backgroundColor:'orange',
		borderRadius:20
	},
	Close:{
		width:45,
		marginLeft:10,
		color:'white',
		padding:6,
		borderRadius:20,
		backgroundColor:'red',
		marginBottom:8
	},
	Open:{
		width:45,
		marginLeft:10,
		color:'white',
		padding:6,
		borderRadius:20,
		backgroundColor:'green',
		marginBottom:8
	},
	Address: {
		fontSize:13,
		textAlign:'center',
		marginLeft:10,
		marginBottom:1,
		marginTop:3
	}
});

export default RestaurantDetail;

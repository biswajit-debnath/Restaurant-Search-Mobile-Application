import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import useApiResult from '../hooks/useApiResult'
import RestaurantList from '../Components/RestaurantList';

import Search from '../Components/Search';

const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchApi, apiResult, errorMessage] = useApiResult();

	const filterResultsByPrice = price => {
		return apiResult.filter(result => result.price === price )
	};

	return(
		<View style={styles.screenContainer}>
			<Search 
			searchTerm={searchTerm} 
			setSearchTerm={setSearchTerm}
			onSubmit={()=>searchApi(searchTerm)} />
			{errorMessage ? <Text>{errorMessage}</Text> : null }
			<ScrollView>
				<RestaurantList  title='Affordable' results={filterResultsByPrice('$')} />
				<RestaurantList  title='Bit Pricier' results={filterResultsByPrice('$$')} />
				<RestaurantList  title='Exclusive' results={filterResultsByPrice('$$$')} />
			</ScrollView>

		</View>
		);
};


const styles = StyleSheet.create({
	screenContainer:{
		flex:1,
		backgroundColor:'white'
	}
});

export default Home;

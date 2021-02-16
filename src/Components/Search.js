import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Search = ({ searchTerm , setSearchTerm, onSubmit }) => {
	return(
		<View style={styles.searchBackground}>
			<Feather name="search" style={styles.searchIcon} />
			<TextInput 
			autoCapitalize="none"
			autoCorrect={false}
			placeholder="Search"
			value={searchTerm}
			style={styles.searchInput}
			onEndEditing={onSubmit}
			onChangeText={(typedTerm)=>setSearchTerm(typedTerm)} />
		</View>
	);
};




const styles = StyleSheet.create({

	searchBackground:{
		backgroundColor: '#F0EEEE',
		height:50,
		borderRadius: 5,
		marginHorizontal: 15,
		marginTop:10,
		flexDirection: 'row',
		marginBottom:10
	},
	searchInput: {
		flex:1,
		fontSize:18
	},
	searchIcon: {
		fontSize: 30,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default Search;
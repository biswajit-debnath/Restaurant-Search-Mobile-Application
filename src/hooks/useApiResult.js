import { useState , useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
	const [apiResult, setApiResult] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	

	const searchApi =async term => {
		try{
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term,
					location: 'san jose'
				}
			});
			setApiResult(response.data.businesses);
			console.log(apiResult);
			setErrorMessage('');
		} catch(err) {
			setErrorMessage("Something went wrong please retry!");
		}
	};

	useEffect(()=>{
		searchApi('Pizza');
	},[]);


	return [searchApi, apiResult, errorMessage];
};
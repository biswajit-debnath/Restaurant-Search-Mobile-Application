import axios from 'axios';

export default axios.create({

	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer MF11DSlHCAfwUARBoHczDmeZXCsverNEUYSDcrr7Cw3-HQ9ELosd2f-7SVplD_Gql4NxbaT4Do7n3Dbmb-Fu77WW3aEoVfwT6QP7-dTfGFCnW7_0om1qzuIomSoOX3Yx'
	}
});
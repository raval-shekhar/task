import axios from 'axios';
const BASE_URL = process.env.REACT_APP_APIBASE;

export const fetchProducts = () => {
	return axios
		.get(BASE_URL)
		.then((e) => e)
		.catch((e) => e);
};

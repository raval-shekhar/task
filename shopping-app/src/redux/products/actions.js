const ProductActions = {
	FETCH_PRODUCTS: 'FETCH_PRODUCTS',
	FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
	FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
	ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
	REMOVE_FORM_CART: 'REMOVE_FORM_CART',
	CHECKOUT: 'CHECKOUT',

	requestProducts: () => {
		return {
			type: ProductActions.FETCH_PRODUCTS,
		};
	},

	addToCart: (value) => {
		return {
			type: ProductActions.ADD_PRODUCT_TO_CART,
			item: value,
		};
	},

	removeFromCart: (value) => {
		return {
			type: ProductActions.REMOVE_FORM_CART,
			item: value,
		};
	},

	checkoutItems: () => {
		return {
			type: ProductActions.CHECKOUT,
		};
	}
};

export default ProductActions;

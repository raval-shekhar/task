import ProductActions from './actions';

const initState = {
	loader: false,
  products: [],
  error: null,
  cart: [],
};

export default function rootReducer(state = initState, action) {
	switch (action.type) {
		case ProductActions.FETCH_PRODUCTS:
			return {
				...state,
				loader: true,
			};
		case ProductActions.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.products,
				loader: false,
			};
		case ProductActions.FETCH_PRODUCTS_ERROR:
			return {
				...state,
				loader: false,
				error: action.error,
			};
		case ProductActions.CHECKOUT:
			return {
				...state,
				cart: []
			};
		case ProductActions.ADD_PRODUCT_TO_CART:
			const isItemInCart = state.cart.find(
				(item) => item.id === action.item.id
			);
			let updatedCart;
			if (isItemInCart) {
				updatedCart = state.cart.map((item) =>
					item.id === action.item.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			} else {
				updatedCart = [...state.cart, { ...action.item, amount: 1 }];
			}
			return {
				...state,
				cart: updatedCart,
			};
		case ProductActions.REMOVE_FORM_CART:
			const cart = state.cart.reduce((acc, item) => {
				if (item.id === action.item) {
					if (item.amount === 1) return acc;
					return [...acc, { ...item, amount: item.amount - 1 }];
				} else {
					return [...acc, item];
				}
			}, []);
			return {
				...state,
				cart: cart,
			};
		default:
			return state;
	}
}

import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../CartItem';
import { Wrapper } from './cart.style';
import ProductActions from '../../redux/products/actions';

const Cart = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.products);
	const calculateTotal = (items) =>
		items.reduce((acc, item) => acc + item.amount * item.price, 0);

	return (
		<Wrapper>
			<h2>Your Cart</h2>
			{cart.length === 0 ? <p>No items in cart.</p> : null}
			{cart.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
			<h2>Total: ${calculateTotal(cart).toFixed(2)}</h2>
			{cart.length !== 0 ? (
				<Button
					color='primary'
					variant='outlined'
					onClick={() => dispatch(ProductActions.checkoutItems())}
				>
					Checkout
				</Button>
			) : null}
		</Wrapper>
	);
};

export default Cart;

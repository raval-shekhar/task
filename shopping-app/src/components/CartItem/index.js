import { Button } from '@mui/material';
import { Wrapper } from './cart-item.style';
import { useDispatch } from 'react-redux';
import ProductActions from '../../redux/products/actions';

const CartItem = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<Wrapper>
			<div>
				<h3>{item.title}</h3>
				<div className='information'>
					<p>Price: ${item.price}</p>
					<p>Total: ${(item.amount * item.price).toFixed(2)}</p>
				</div>
				<div className='buttons'>
					<Button
						size='small'
						disableElevation
						variant='contained'
						onClick={() => dispatch(ProductActions.removeFromCart(item.id))}
					>
						-
					</Button>
					<p>{item.amount}</p>
					<Button
						size='small'
						disableElevation
						variant='contained'
						onClick={() => dispatch(ProductActions.addToCart(item))}
					>
						+
					</Button>
				</div>
			</div>
			<img src={item.image} alt={item.title} />
		</Wrapper>
	);
};

export default CartItem;

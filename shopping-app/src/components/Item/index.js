import { Button } from '@mui/material';
import { Wrapper } from './item.style';
import { useDispatch } from 'react-redux';
import ProductActions from '../../redux/products/actions';

const Item = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<Wrapper>
			<img src={item.image} alt={item.title} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<h3>${item.price}</h3>
			</div>
			<Button onClick={() => dispatch(ProductActions.addToCart(item))}>
				Add to cart
			</Button>
		</Wrapper>
	);
};

export default Item;

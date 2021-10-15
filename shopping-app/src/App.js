import React, { Fragment, useEffect } from 'react';
import {
	Badge,
	Drawer,
	Grid,
	LinearProgress,
	Container,
	AppBar,
	Toolbar,
	Box,
	Typography,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Wrapper } from './app.style';
import Item from './components/Item';
import Cart from './components/Cart';
import ProductActions from './redux/products/actions';

import './style.css';


export default function App() {
	const [cartOpen, setCartOpen] = useState(false);
	const dispatch = useDispatch();
	const { cart, loading, error, products } = useSelector(
		(state) => state.products
	);

	useEffect(() => {
		dispatch(ProductActions.requestProducts());
	}, [dispatch])

	const getTotalItems = (items) => items.reduce((acc, item) => acc + item.amount, 0);

	if (loading) return <LinearProgress />;
	if (error) return <div>Something went wrong</div>;

	return (
		<Fragment>
			<Box sx={{ flexGrow: 1, marginBottom: 10 }}>
				<AppBar position='fixed'>
					<Toolbar>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							Shopping Cart
						</Typography>
						<div onClick={() => setCartOpen(true)}>
							<Badge badgeContent={getTotalItems(cart)} color='error'>
								<AddShoppingCart />
							</Badge>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
			<Wrapper>
				<Drawer
					anchor='right'
					open={cartOpen}
					onClose={() => setCartOpen(false)}
				>
					<Cart />
				</Drawer>
				<Container>
					<Grid container spacing={3}>
						{products?.map((item) => (
							<Grid item key={item.id} xs={12} sm={4}>
								<Item item={item} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Wrapper>
		</Fragment>
	);
}

import { all, takeEvery, put, fork } from 'redux-saga/effects';
import ProductAction from './actions';
import { fetchProducts } from './service';


export function* listProducts() {
	yield takeEvery(ProductAction.FETCH_PRODUCTS, function* () {
		try {
			let response = yield fetchProducts();
			if (response.status === 200 || response.status === 201) {
				yield put({
					type: ProductAction.FETCH_PRODUCTS_SUCCESS,
					products: response.data,
				});
			} else {
				throw response;
			}
		} catch (e) {
			yield put({
				type: ProductAction.FETCH_PRODUCTS_ERROR,
				error: e.message,
			});
		}
	});
}

export default function* productSaga() {
	yield all([fork(listProducts)]);
}

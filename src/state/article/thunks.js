import { 
  fetchProductsInProgress,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchMaterialsSuccess,
} from "./actions";
import * as productsApi from "../../api/products";

export const fetchProducts = _ => async dispatch => {
  try {
    dispatch(fetchProductsInProgress());
    const response = await productsApi.fetchProducts();
    const products = response?.data?.data ?? [];
    const materials = [
      ...new Set(products.map(product => product.material))
    ];
    dispatch(fetchProductsSuccess(products))
    dispatch(fetchMaterialsSuccess(materials))
  } catch(e) {
    dispatch(fetchProductsFailure(e))
  }
}

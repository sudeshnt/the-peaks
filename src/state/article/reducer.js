import {
  FETCH_PRODUCTS_IN_PROGRESS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_MATERIALS_SUCCESS,
} from './types'

const initialState = {
  items: [],
  materials: [],
  loading: false,
  error: null
}

const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_PRODUCTS_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case FETCH_MATERIALS_SUCCESS:
      return {
        ...state,
        materials: payload,
      }
    default:
      return state;
  }
}

export default ProductReducer;
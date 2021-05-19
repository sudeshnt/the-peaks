import {
  FETCH_PRODUCTS_IN_PROGRESS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_MATERIALS_SUCCESS
} from "./types";

export const fetchProductsInProgress = () => ({
  type: FETCH_PRODUCTS_IN_PROGRESS
})

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
})

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error
})

export const fetchMaterialsSuccess = materials => ({
  type: FETCH_MATERIALS_SUCCESS,
  payload: materials
})

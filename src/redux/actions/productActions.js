// import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/actionTypes";

export const fetchProduct = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const setProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

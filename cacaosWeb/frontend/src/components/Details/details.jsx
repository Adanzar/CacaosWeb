/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProduct } from '../../redux/actions/actionCreators';

export default function Details() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const selectedProduct = products?.find((product) => product?._id === productId);
  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, []);
  return (
    <>
      <div className="card">
        <div className="card__cover">
          <img src={selectedProduct?.imagesUrls} alt={selectedProduct?.name} />
        </div>
        <p>{ selectedProduct?.name}</p>
      </div>
    </>
  );
}

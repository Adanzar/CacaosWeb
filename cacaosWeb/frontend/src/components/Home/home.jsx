/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/actionCreators';
import './home.scss';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  //   const currentProduct = products.find((item) => !!item);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="list__container">
        <img src={products[0]?.imagesUrls[0]} alt="PRODUCTS" />
        <p>{products[0]?.description}</p>
      </div>
      <h2>This weeks selection</h2>

    </>

  );

  // <div className="list__container">
  //   <img src={'https://trello-attachments.s3.amazonaws.com/60bf42b01e72b913d536a078/800x500/d261b471ed775bad23872968a8a3be43/screen-0.jpg'} alt="PRODUCTS" />
  // </div>
}

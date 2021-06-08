/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/actionCreators';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <ul className="List__container">
      {products.map((item) => (
        <li>
          <small>
            {item.name}
            {''}
            {item.price.amount}
          </small>
          <img src={item.imagesUrls[0]} alt="" />
        </li>
      ))}
    </ul>
  );
}

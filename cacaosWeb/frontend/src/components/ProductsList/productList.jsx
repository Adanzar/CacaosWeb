import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/actionCreators';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <ul className="list__container">
      {products.map((item) => (
        <li>
          <img src={item.imagesUrls[0]} alt="PRODUCTS" />
          <small>
            {item.name}
          </small>
          <small>
            {' '}
            {item.price.amount}
            {' '}

            {' '}
            {item.price.currency}
          </small>

        </li>
      ))}
    </ul>
  );
}

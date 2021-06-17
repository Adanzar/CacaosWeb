/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/actions/actionCreators';
import './productList.scss';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const product = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getProducts());
  }, [product]);
  return (
    <ul className="list">
      {products.map((item) => (
        <Link to={`/details/${item?._id}`}>
          <li className="list__item">
            <img className="list__item--img" src={item.imagesUrls} alt={item.name} />
            <small className="list__item--name--price">
              {item.name}
              {' '}
              {item.price.amount}
              {' '}
              {item.price.currency}
            </small>
          </li>
        </Link>
      ))}
    </ul>
  );
}

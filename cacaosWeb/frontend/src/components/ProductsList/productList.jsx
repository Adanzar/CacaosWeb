/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/actions/actionCreators';
import './productList.scss';

export default function ProductList() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const products = useSelector((store) => store.products);
  const product = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getProducts());
  }, [product]);
  return (
    <>
      <input
        className="search"
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <ul className="list">
        {products.filter((item) => {
          if (search === '') {
            return item;
          } if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        }).map((item) => (
          <Link className="home__list-link" to={`/details/${item?._id}`}>
            <li key={item._id} className="home__list-card">
              <img className="list-card__image" src={item.imagesUrls} alt="PRODUCTS" />
              <small className="list-card__info">
                {item.name}
                {' '}
                {item.weight.quantity}
                {' '}
                {item.weight.measure}
              </small>
              <small className="list-card__price">
                {' '}
                {item.price.amount}
                {' '}
                {item.price.currency}
              </small>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

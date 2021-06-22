/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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
    <div className="products">
      <input
        placeholder="search products"
        data-testid="input-search"
        className="products__search"
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <ul className="products__list">
        {products?.filter((item) => {
          if (search === '') {
            return item;
          } if (item?.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        }).map((item) => (
          <Link className="products__list-link" to={`/details/${item?._id}`}>
            <li key={item?._id} className="products__list-card">
              <img key={item?.imagesUrls} className="products__list--card-image" src={item?.imagesUrls} alt={item?.name} />
              <small key={item?.weight?.measure} className="products__list--card-info">
                {item?.name}
                {' '}
                {item?.weight?.quantity}
                {' '}
                {item?.weight?.measure}
              </small>
              <small key={item?.price?.amount} className="products__list--card-price">
                {' '}
                {item?.price?.amount}
                {' '}
                {item?.price?.currency}
              </small>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

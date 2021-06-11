/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getProducts } from '../../redux/actions/actionCreators';
import './home.scss';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const thisWeekProducts = [...products];
  const history = useHistory();
  const seeAllProducts = () => history.push('/products');

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="home__container">
        <Link key={products[0]?.name} to={`/details/${products[0]?._id}`}>
          <img className="home__container--main-image" src={products[0]?.imagesUrls[0]} alt="PRODUCTS" />
        </Link>
        <p>{products[0]?.description}</p>
        <Link className="home__container--first-link" to={`/details/${products[0]?._id}`}>
          <small>Discover it</small>
        </Link>
        <ul className="">
          <h2>This weeks selection</h2>
          {thisWeekProducts.slice(1, 2).map((item) => (
            <Link className="card__link" to={`/details/${item?._id}`}>
              <li className="card">
                <img className="card__image" src={item.imagesUrls} alt="PRODUCTS" />
                <small className="card__name">
                  {item.name}
                </small>
                <small className="card__price">
                  {' '}
                  {item.price.amount}
                  {' '}
                  {item.price.currency}
                </small>
              </li>
            </Link>
          ))}
        </ul>
        <button
          className="home__container--btn-products"
          type="button"
          onClick={seeAllProducts}
        >
          See all products
        </button>
      </div>
    </>
  );
}

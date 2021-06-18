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
  // const user = useSelector((store) => store.user);
  const accesstoken = useSelector((store) => store.accesstoken);
  const thisWeekProducts = [...products];
  const history = useHistory();
  const seeAllProducts = () => history.push('/products');

  useEffect(() => {
    dispatch(getProducts({ headers: { authorization: accesstoken?.token } }));
  }, []);

  return (
    <>
      <div className="home">
        <Link className="home__main" key={products[0]?.name} to={`/details/${products[0]?._id}`}>
          <img className="home__main-image" src={products[0]?.imagesUrls[0]} alt={products[0]?.name} />
          <p className="home__main-description">{products[0]?.briefDescription}</p>
          <small className="home__main-link">Discover it</small>
        </Link>
        <ul className="home__list--container">
          <h2>This weeks selection</h2>
          {thisWeekProducts.slice(1, 4).map((item) => (
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
        <button
          className="home__products--btn"
          type="button"
          onClick={seeAllProducts}
        >
          See all products
        </button>
      </div>
    </>
  );
}

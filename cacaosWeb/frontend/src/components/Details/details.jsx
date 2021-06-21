/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProduct, deleteProduct } from '../../redux/actions/actionCreators';
import addToCart from '../../redux/actions/cartActionCreators';
import './detail.scss';

export default function Details() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);
  const cart = useSelector((store) => store.cart);
  const token = useSelector((store) => store.accesstoken);

  function takeOutProduct(id) {
    dispatch(deleteProduct(id));
  }

  function addToBasket(selectedProduct) {
    debugger;
    return dispatch(addToCart(selectedProduct, cart));
  }

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, []);

  return (
    <>

      <div className="card-details">
        <div className="card-details__image">
          <img src={product?.imagesUrls} alt={product?.name} />
        </div>
        <div className="card-details__info">
          <h2>{ product?.name}</h2>
          <p>{product?.briefDescription}</p>
          <p>
            {product?.price?.amount}
            {' '}
            {product?.price?.currency}
          </p>
        </div>
        <button
          type="button"
          onClick={() => addToBasket(product)}
        >
          ADD TO CART
        </button>
        {token?.user?.isAdmin && (
        <div className="card__details--admin-btn">
          <div role="navigation" className="admin__btns" onClick={() => { takeOutProduct(productId); }}>
            Delete
          </div>
          <Link to={`/update-product/${product?._id}`}>
            <button className="admin__btns" type="button">
              Update
            </button>
          </Link>
        </div>
        )}

        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  type="button"
                >
                  Nutritional Value
                </button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <ul>
                  {product?.nutritionalValue?.map((nutritionalValue) => (
                    <ul key={nutritionalValue}>
                      <li key={nutritionalValue}>
                        {nutritionalValue}
                      </li>
                    </ul>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  type="button"
                >
                  Description
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                {product?.description}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  type="button"
                >
                  Ingredients
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                {product?.ingredients?.map((ingredient) => (
                  <ul key={ingredient}>
                    <li key={ingredient}>
                      {ingredient}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

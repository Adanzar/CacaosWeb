/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProduct } from '../../redux/actions/actionCreators';
import { addToCart } from '../../redux/actions/cartActionCreators';
import './detail.scss';

export default function Details() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  // usar un setState para selectedProduct
  const selectedProduct = products?.find((product) => product?._id === productId);

  function addToBasket(product) {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, []);

  return (
    <>
      <div className="card-details">
        <div className="card-details__image">
          <img src={selectedProduct?.imagesUrls} alt={selectedProduct?.name} />
        </div>
        <div className="card-details__info">
          <h2>{ selectedProduct?.name}</h2>
          <p>{selectedProduct?.briefDescription}</p>
          <p>
            {selectedProduct?.price.amount}
            {' '}
            {selectedProduct?.price.currency}
          </p>
        </div>
        <button
          type="button"
          onClick={() => addToBasket(selectedProduct)}
        >
          ADD TO CART
        </button>
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
                {selectedProduct?.nutritionalValue}
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
                {selectedProduct?.description}
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
                {selectedProduct?.ingredients}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

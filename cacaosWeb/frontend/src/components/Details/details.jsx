import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProduct, deleteProduct, modifyStock } from '../../redux/actions/actionCreators';
import { addToCart } from '../../redux/actions/cartActionCreators';
import './detail.scss';

export default function Details() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);
  const cart = useSelector((store) => store.cart);
  const token = useSelector((store) => store.accesstoken);
  const [currentStock, setCurrentStock] = useState(product?.stock);
  let changeStock = null;
  function takeOutProduct(id) {
    dispatch(deleteProduct(id));
  }

  function subsStock() {
    changeStock = currentStock - 1;
    return changeStock;
  }

  function addToBasket(selectedProduct) {
    subsStock();
    setCurrentStock(changeStock);
    dispatch(modifyStock(product._id, { stock: currentStock }));
    dispatch(addToCart(selectedProduct, cart));
  }

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, []);

  return (
    <>
      <div className="details">
        <div className="details__card--container">
          <img className="card__image" src={product?.imagesUrls} alt={product?.name} />
          <h3>{ product?.name}</h3>
          <p>{product?.briefDescription}</p>
          <small className="card__info">
            {product?.price?.amount}
            {' '}
            {product?.price?.currency}
          </small>
          <div className="card__buttons">
            <button
              className="buttons"
              type="button"
              onClick={() => addToBasket(product)}
            >
              <img src="https://img.icons8.com/windows/30/000000/fast-cart.png" alt="cart" />
            </button>

            {token?.user?.isAdmin && (
              <>
                <small className="admin__section-header"> Admin options </small>
                <div className="admin__section-buttons">
                  <button type="button" className="buttons" onClick={() => { takeOutProduct(productId); }}>
                    <img src="https://img.icons8.com/fluent-systems-regular/30/000000/trash--v1.png" alt="trashIcon" />
                  </button>
                  <Link to={`/update-product/${product?._id}`}>
                    <button className="buttons" type="button">
                      <img src="https://img.icons8.com/ios-filled/30/000000/approve-and-update.png" alt="update-btn" />

                    </button>
                  </Link>

                  <Link to={`/add-product/${product?._id}`}>
                    <button className="buttons" type="button">
                      <img src="https://img.icons8.com/ios/30/000000/create-new.png" alt="add-btn" />
                    </button>
                  </Link>

                </div>
              </>
            )}
          </div>
        </div>
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

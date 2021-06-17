import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/actions/actionCreators';

export default function DeleteProduct() {
  const dispatch = useDispatch();
  const products = useSelector((store) => (store.products));
  function takeOutProduct(id) {
    dispatch(deleteProduct(id));
  }
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (

    <>
      <ul className="productToDelete">
        {products.map((item) => (
          <li className="productToDelete__item">
            <img className="productToDelete__item--img" src={item.imagesUrls} alt="PRODUCTS" />
            <small className="productToDelete__item--info">
              {item.name}
              {' '}
              {item.price.amount}
              {' '}
              {item.price.currency}
            </small>
            <button
              type="button"
              className="productToDelete__item--delete-button"
              onClick={() => { takeOutProduct(item._id); }}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

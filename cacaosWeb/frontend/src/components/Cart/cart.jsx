import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <h4> Products in the cart </h4>
      <div className="cart">
        <ul className="cart__list">
          {cart?.map((product) => (
            <li key={product?._id} className="cart__list--products">
              <div>
                {product?.name}
              </div>
              <small>
                {product?.price?.amount}
                {product?.price?.currency}
              </small>
              <p>
                {product?.stock}
              </p>
            </li>
          )) }
        </ul>
      </div>
    </>
  );
}

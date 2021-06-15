import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCart } from '../../redux/actions/cartActionCreators';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(loadCart());
  });
  return (
    <>
      <h4> Products in the cart </h4>
      <div className="cart">
        <ul className="cart__list">
          {cart?.map((product) => (
            <li key={product?._id} className="cart__list--products">
              <div>
                {product?.name}
                {product?.price}
              </div>
            </li>
          )) }
        </ul>
      </div>
    </>
  );
}

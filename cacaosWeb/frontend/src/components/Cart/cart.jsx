import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteInCart } from '../../redux/actions/cartActionCreators';
import { modifyStock } from '../../redux/actions/actionCreators';

export default function Cart() {
  const cart = useSelector((store) => store.cart);
  const reduxProduct = useSelector((store) => store.product);
  const [currentStock, setCurrentStock] = useState(reduxProduct?.stock);
  const dispatch = useDispatch();
  let changeStock = null;

  function addStock() {
    changeStock = currentStock + 1;
    return changeStock;
  }
  function removeFromCart(index) {
    addStock();
    setCurrentStock(changeStock);
    dispatch(modifyStock(reduxProduct._id, { stock: currentStock }));
    dispatch(deleteInCart(index, cart));
  }

  console.log(cart);

  return (
    <>
      <h4> Products in the cart </h4>
      <div className="cart">
        <ul className="cart__list">
          {cart?.map((product, index) => (
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
              <button
                type="button"
                onClick={() => { removeFromCart(index); }}
              >
                poner basurita
              </button>
            </li>

          )) }
        </ul>
      </div>
    </>
  );
}

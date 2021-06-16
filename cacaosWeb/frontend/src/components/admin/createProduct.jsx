/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { createProduct } from '../../redux/actions/actionCreators';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [stockInput, setStockInput] = useState('');
  const [priceAmountInput, setPriceAmountInput] = useState('');
  const [priceCurrencyInput, setPriceCurrencyInput] = useState('');
  const [weightQuantityInput, setWeightQuantityInput] = useState('');
  const [weightMeasureInput, setWeightMeasureInput] = useState('');
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState('');
  const [briefDescriptionInput, setBriefDescriptionInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const dispatch = useDispatch();

  function addNewIngredients() {
    setIngredientsArr([...ingredientsArr, ingredientsInput]);
    setIngredientsInput('');
  }

  function addProduct(event) {
    event.preventDefault();
    dispatch(createProduct({
      name: productName,
      stock: stockInput,
      description: descriptionInput,
      price: {
        amount: priceAmountInput,
        currency: priceCurrencyInput
      },
      briefDescription: briefDescriptionInput,
      category: categoryInput,
      ingredients: ingredientsArr
    }));
  }

  return (
    <>
      <div className="addProduct__container">
        <h3>Welcome back!</h3>
      </div>
      <div className="addProduct__container--form">
        <form onSubmit={(event) => {
          addProduct(event);
        }}
        >
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              onChange={(event) => {
                setProductName(event.target.value);
              }}
              value={productName}
            />
          </label>
          <label htmlFor="price">
            price
            <input
              type="number"
              name="price"
              placeholder="write amount"
              onChange={(event) => {
                setPriceAmountInput(event.target.value);
              }}
              value={priceAmountInput}
            />
            <input
              type="text"
              name="price"
              placeholder="write currency"
              onChange={(event) => {
                setPriceCurrencyInput(event.target.value);
              }}
              value={priceCurrencyInput}
            />
          </label>
          <label htmlFor="weight">
            weight
            <input
              type="number"
              name="weight"
              placeholder="write quantity"
              onChange={(event) => {
                setWeightQuantityInput(event.target.value);
              }}
              value={weightQuantityInput}
            />
            <input
              type="text"
              name="weight"
              placeholder="write measure"
              onChange={(event) => {
                setWeightMeasureInput(event.target.value);
              }}
              value={weightMeasureInput}
            />
          </label>
          <label htmlFor="stock">
            Stock
            <input
              type="number"
              name="stock"
              onChange={(event) => {
                setStockInput(event.target.value);
              }}
              value={stockInput}
            />
          </label>
          <label htmlFor="ingredients">
            Ingredients
            <input
              type="text"
              name="ingredients"
              onChange={(event) => {
                setIngredientsInput(event.target.value);
              }}
              value={ingredientsInput}
            />
            <span
              role="navigation"
              onClick={(event) => {
                addNewIngredients(event);
              }}
            >
              <FontAwesomeIcon className="list--side-item-icon" icon={faPlus} />
            </span>
          </label>
          <label htmlFor="briefDescription">
            Brief description
            <input
              type="text"
              name="briefDescription"
              onChange={(event) => {
                setBriefDescriptionInput(event.target.value);
              }}
              value={briefDescriptionInput}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              type="text"
              name="description"
              onChange={(event) => { setDescriptionInput(event.target.value); }}
              value={descriptionInput}
            />
          </label>
          <label htmlFor="category">
            Category
            <input
              type="text"
              name="name"
              onChange={(event) => {
                setCategoryInput(event.target.value);
              }}
              value={categoryInput}
            />
          </label>
          <button
            type="submit"
            className="submit-button"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
}

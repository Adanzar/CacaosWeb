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
import './createProduct.scss';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [stockInput, setStockInput] = useState('');
  const [priceAmountInput, setPriceAmountInput] = useState('');
  const [priceCurrencyInput, setPriceCurrencyInput] = useState('');
  const [weightQuantityInput, setWeightQuantityInput] = useState('');
  const [weightMeasureInput, setWeightMeasureInput] = useState('');
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [nutritionalInput, setNutritionalInput] = useState('');
  const [nutritionalValueArr, setNutritionalValueArr] = useState([]);
  const [imagesUrlsInput, setImagesUrlsInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [briefDescriptionInput, setBriefDescriptionInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const dispatch = useDispatch();

  function addNewIngredients() {
    setIngredientsArr([...ingredientsArr, ingredientsInput]);
    setIngredientsInput('');
  }

  function addNutritionalValue() {
    setNutritionalValueArr([...nutritionalValueArr, nutritionalInput]);
    setNutritionalInput('');
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
      weight: {
        quantity: weightQuantityInput,
        measure: weightMeasureInput
      },
      ingredients: ingredientsArr,
      nutritionalValue: nutritionalValueArr,
      briefDescription: briefDescriptionInput,
      category: categoryInput,
      imagesUrls: imagesUrlsInput
    }));
  }

  return (
    <>
      <div className="addProduct-header">
        <h3>Create a new product!</h3>
      </div>
      <div className="form-section">
        <form
          onSubmit={(event) => {
            addProduct(event);
          }}
        >
          <label className="form-section__name" htmlFor="name">
            Name:
            <input
              data-testid="input-name"
              type="text"
              name="name"
              onChange={(event) => {
                setProductName(event.target.value);
              }}
              value={productName}
            />
          </label>
          <label className="form-section__price" htmlFor="price">
            Price:
            <input
              data-testid="input-price-amount"
              type="number"
              name="price"
              placeholder="Amount"
              onChange={(event) => {
                setPriceAmountInput(event.target.value);
              }}
              value={priceAmountInput}
            />
            <input
              data-testid="input-price-currency"
              type="text"
              name="price"
              placeholder="$, €"
              onChange={(event) => {
                setPriceCurrencyInput(event.target.value);
              }}
              value={priceCurrencyInput}
            />
          </label>
          <label className="form-section__weight" htmlFor="weight">
            Weight:
            <input
              data-testid="input-weight-quantity"
              type="number"
              name="weight"
              placeholder="Quantity"
              onChange={(event) => {
                setWeightQuantityInput(event.target.value);
              }}
              value={weightQuantityInput}
            />
            <input
              data-testid="input-weight-measure"
              type="text"
              name="weight"
              placeholder="Measure"
              onChange={(event) => {
                setWeightMeasureInput(event.target.value);
              }}
              value={weightMeasureInput}
            />
          </label>
          <label className="form-section__stock" htmlFor="stock">
            Stock:
            <input
              data-testid="input-stock"
              type="number"
              name="stock"
              onChange={(event) => {
                setStockInput(event.target.value);
              }}
              value={stockInput}
            />
          </label>
          <label className="form-section__ingredients" htmlFor="ingredients">
            Ingredients:
            <input
              data-testid="input-ingredients"
              type="text"
              name="ingredients"
              placeholder="Add 1 ingredient at the time"
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
              <FontAwesomeIcon className="form__icon" icon={faPlus} />
            </span>
            <div className="nutritionalValue__list-container">
              <ul>
                {ingredientsArr.map((item) => (
                  <li>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </label>
          <label className="form-section__caption" htmlFor="briefDescription">
            Caption:
            <input
              data-testid="input-description"
              type="text"
              name="briefDescription"
              onChange={(event) => {
                setBriefDescriptionInput(event.target.value);
              }}
              value={briefDescriptionInput}
            />
          </label>
          <label className="form-section__description" htmlFor="description">
            Description:
            <textarea
              data-testid="input-textarea"
              type="text"
              name="description"
              onChange={(event) => { setDescriptionInput(event.target.value); }}
              value={descriptionInput}
            />
          </label>
          <label className="form-section__category" htmlFor="category">
            Category:
            <input
              data-testid="input-category"
              type="text"
              name="name"
              onChange={(event) => {
                setCategoryInput(event.target.value);
              }}
              value={categoryInput}
            />
          </label>
          <label className="form-section__image" htmlFor="imagesUrls">
            Image:
            <input
              data-testid="input-image"
              type="text"
              name="imagesUrls"
              onChange={(event) => {
                setImagesUrlsInput(event.target.value);
              }}
              value={imagesUrlsInput}
            />
          </label>
          <label className="form-section__nutritional-value" htmlFor="nutritionalValue">
            Nutritional Value:
            <input
              data-testid="input-nutritionalValue"
              type="text"
              name="nutritionalValue"
              onChange={(event) => {
                setNutritionalInput(event.target.value);
              }}
              value={nutritionalInput}
            />
            <span
              role="navigation"
              onClick={(event) => {
                addNutritionalValue(event);
              }}
            >
              <FontAwesomeIcon className="form__icon" icon={faPlus} />
            </span>
            <div className="nutritionalValue__list-container">
              <ul>
                {nutritionalValueArr.map((item) => (
                  <li>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </label>
          <button
            data-testid="add-btn"
            type="submit"
            className="form-button"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
}

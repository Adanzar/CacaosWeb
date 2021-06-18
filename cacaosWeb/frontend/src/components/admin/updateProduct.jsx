/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt, faPlus
} from '@fortawesome/free-solid-svg-icons';
import { modifyProduct, getOneProduct } from '../../redux/actions/actionCreators';

export default function UpdateProduct() {
  const product = useSelector((store) => store.product);
  const { productId } = useParams();
  const [productName, setProductName] = useState(product?.name);
  const [stockInput, setStockInput] = useState(product?.stock);
  const [priceAmountInput, setPriceAmountInput] = useState(product?.price?.amount);
  const [priceCurrencyInput, setPriceCurrencyInput] = useState(product?.price?.weight);
  const [weightQuantityInput, setWeightQuantityInput] = useState(product?.weight?.quantity);
  const [weightMeasureInput, setWeightMeasureInput] = useState(product?.weight?.measure);
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [ingredientsArr, setIngredientsArr] = useState(product?.ingredients);
  const [nutritionalInput, setNutritionalInput] = useState(product?.nutritionalValue);
  const [nutritionalValueArr, setNutritionalValueArr] = useState([]);
  const [imagesUrlsInput, setImagesUrlsInput] = useState(product?.imagesUrls);
  const [descriptionInput, setDescriptionInput] = useState(product?.description);
  const [briefDescriptionInput, setBriefDescriptionInput] = useState(product?.briefDescription);
  const [categoryInput, setCategoryInput] = useState(product?.category);
  const dispatch = useDispatch();
  useEffect(() => {
    getOneProduct(productId);
  }, []);
  function deleteIngredients() {
    setIngredientsArr([]);
  }
  function addNewIngredients() {
    setIngredientsArr([...ingredientsArr, ingredientsInput]);
    setIngredientsInput('');
  }
  function deleteNutritionalValue() {
    setNutritionalValueArr([]);
  }

  function addNutritionalValue() {
    setNutritionalValueArr([...nutritionalValueArr, nutritionalInput]);
    setNutritionalInput('');
  }

  function updateProduct(event) {
    event.preventDefault();
    dispatch(modifyProduct(productId, {
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
      <div className="addProduct__container">
        <h3>Welcome back!</h3>
      </div>
      <div className="addProduct__container--form">
        <form onSubmit={(event) => {
          updateProduct(event);
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
            Price
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
            Weight
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
            <div className="ingredients__list-container">
              <ul>

                {ingredientsArr.map((item) => (
                  <li>
                    {item}
                  </li>
                ))}

              </ul>
              <div
                onClick={deleteIngredients}
              >
                <FontAwesomeIcon className="list--side-item-icon" icon={faTrashAlt} />
              </div>
            </div>
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
          <label htmlFor="imagesUrls">
            Image
            <input
              type="text"
              name="imagesUrls"
              onChange={(event) => {
                setImagesUrlsInput(event.target.value);
              }}
              value={imagesUrlsInput}
            />
          </label>
          <label htmlFor="nutritionalValue">
            <div className="nutritionalValue__list-container">
              <ul>

                {ingredientsArr.map((item) => (
                  <li>
                    {item}
                  </li>
                ))}

              </ul>
              <div
                onClick={deleteNutritionalValue}
              >
                <FontAwesomeIcon className="list--side-item-icon" icon={faTrashAlt} />
              </div>
            </div>
            Nutritional Value
            <input
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
              <FontAwesomeIcon className="list--side-item-icon" icon={faPlus} />
            </span>
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

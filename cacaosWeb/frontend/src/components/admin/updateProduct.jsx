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
import './updateProduct.scss';

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
  const [nutritionalInput, setNutritionalInput] = useState('');
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
      <div className="addProduct">
        <h3>Update product</h3>
      </div>
      <div className="form-section">
        <form onSubmit={(event) => {
          updateProduct(event);
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
              placeholder="quantity"
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
              <FontAwesomeIcon className="list__plus-icon" icon={faPlus} />
            </span>
            <div className="ingredients__list-container">
              <ul>

                {ingredientsArr?.map((item) => (
                  <li key={item}>
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
          </label>
          <label className="form-section__caption" htmlFor="briefDescription">
            Caption:
            <input
              data-testid="input-caption"
              type="text"
              name="briefDescription"
              onChange={(event) => {
                setBriefDescriptionInput(event.target.value);
              }}
              value={briefDescriptionInput}
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              data-testid="input-description"
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
          <label className="form-section__nutritional" htmlFor="nutritionalValue">
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

                {ingredientsArr?.map((item) => (
                  <li>
                    {item}
                  </li>
                ))}

              </ul>
              <div
                onClick={deleteNutritionalValue}
              >
                <FontAwesomeIcon className="form__icon" icon={faTrashAlt} />
              </div>
            </div>
          </label>
          <button
            data-testid="add-btn"
            type="submit"
            className="form-button"
          >
            UPDATE
          </button>
        </form>
      </div>
    </>
  );
}

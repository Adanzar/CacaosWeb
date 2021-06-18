/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import {
  faBars, faSearch, faUser, faShoppingBag
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const history = useHistory();
  const seeAllProducts = () => history.push('/products');

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="list--side-item">
            <Link to="/products">
              <FontAwesomeIcon className="list--side-item-icon" icon={faBars} />
            </Link>
          </li>
          <li className="list--side-item">
            <div
              role="navigation"
              onClick={seeAllProducts}
            >
              {' '}
              <FontAwesomeIcon className="list--side-item-icon" icon={faSearch} />
              {' '}

            </div>
          </li>
          <li className="navigation__list--logo">
            <Link to="/">
              {' '}
              <img className="navigation__list--logo-image" src="https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/60be309a34029d4dc9bbb679/c905a5e97b08b4dc426bb5f02ebd0fce/Cacaos_LOGO_original.png" alt="CACAOS LOGO" />
            </Link>
          </li>
          <li className="list--side-item">
            <Link to="/login">
              <div>
                {' '}
                <FontAwesomeIcon className="list--side-item-icon" icon={faUser} />
              </div>
            </Link>
          </li>
          <li className="list--side-item">
            <Link to="/cart">
              <div>
                {' '}
                <FontAwesomeIcon className="list--side-item-icon" icon={faShoppingBag} />
              </div>
            </Link>
          </li>
        </ul>
      </nav>

    </>
  );
}

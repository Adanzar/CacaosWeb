import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faBars, faSearch, faUser, faShoppingBag
} from '@fortawesome/free-solid-svg-icons';

// import { useSelector } from 'react-redux';

export default function Header() {
//   const dispatch = useDispatch();
  // const products = useSelector((store) => store.products);

  return (
    <>
      <nav>
        <ul className="navigation__list">
          <li className="list--side-item">
            <FontAwesomeIcon icon={faBars} />
            <ul className="dropdown">
              <li>Chocolate</li>
              <li>Raw Seeds</li>
              <li>Nibs</li>
              <li>Drinks</li>
            </ul>
          </li>
          <li className="list--side-item">
            <div>
              {' '}
              <FontAwesomeIcon icon={faSearch} />
              {' '}
            </div>
          </li>
          <li className="navigation__list--logo">
            <Link to="/">
              {' '}
              <img className="navigation__list--image" src="https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/60be309a34029d4dc9bbb679/c905a5e97b08b4dc426bb5f02ebd0fce/Cacaos_LOGO_original.png" alt="" />
            </Link>
          </li>
          <li className="list--side-item">
            <div>
              {' '}
              <FontAwesomeIcon icon={faUser} />
            </div>
            <ul>
              <li>Login</li>
            </ul>
          </li>
          <li className="list--side-item">
            <div>
              {' '}
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
          </li>
        </ul>
      </nav>
    </>

  );
}

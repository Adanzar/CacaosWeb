import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <ul className="dropdown">
          <li>
            <div>
              {' '}
              <FontAwesomeIcon icon={faBars} />
            </div>
            <ul>
              <li>Layout</li>
              <li>Input</li>
              <li>Display</li>
              <li>Feedback</li>
            </ul>
          </li>
          <li>
            <div>
              {' '}
              <FontAwesomeIcon icon={faSearch} />
              {' '}
            </div>
          </li>
          <li className="dropdown__logo">
            <img className="dropdown__logo--image" src="https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/60be309a34029d4dc9bbb679/c905a5e97b08b4dc426bb5f02ebd0fce/Cacaos_LOGO_original.png" alt="" />
          </li>
          <li>
            <div>
              {' '}
              <FontAwesomeIcon icon={faUser} />
            </div>
            <ul>
              <li>Layout</li>
              <li>Input</li>
              <li>Display</li>
              <li>Feedback</li>
            </ul>
          </li>
          <li>
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

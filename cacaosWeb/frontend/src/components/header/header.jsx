/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './header.scss';
import { Link, useHistory } from 'react-router-dom';
import images from '../../constants/images';

export default function Header() {
  const history = useHistory();
  const seeAllProducts = () => history.push('/products');

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="list--side-item">
            <Link to="/products">
              <img src="https://img.icons8.com/windows/30/000000/drag-list-up.png" alt="" />
            </Link>
          </li>
          <li className="list--side-item">
            {/* list__item--side */}
            <div
              role="navigation"
              onClick={seeAllProducts}
            >
              {' '}
              <img src="https://img.icons8.com/fluent-systems-regular/30/000000/search--v1.png" alt="" />
              {' '}

            </div>
          </li>
          <li className="navigation__list--logo">
            {/* list__item--center */}
            <Link to="/">
              {' '}
              <img className="navigation__list--logo-image" src="https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/60be309a34029d4dc9bbb679/c905a5e97b08b4dc426bb5f02ebd0fce/Cacaos_LOGO_original.png" alt="CACAOS LOGO" />
            </Link>
          </li>
          <li className="list--side-item">
            <Link to="/login">
              <div>
                {' '}
                <img src={images.login.src} alt={images.login.alt} />
              </div>
            </Link>
          </li>
          <li className="list--side-item">
            <Link to="/cart">
              <div>
                {' '}
                <img src="https://img.icons8.com/ios/30/000000/shopping-bag--v3.png" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>

    </>
  );
}

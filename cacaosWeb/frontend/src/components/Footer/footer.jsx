import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FiPlus } from 'react-icons/fi';
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer__list">
      <li className="footer__list--item">
        Chocolates
        <span>{FiPlus }</span>
        <ul className="dropdown">
          <li>Chocolate</li>
          <li>Raw Seeds</li>
          <li>Nibs</li>
          <li>Drinks</li>
        </ul>
      </li>
      <li className="footer__list--item">
        Espai Xocolata
        <ul className="dropdown">
          <li>Nibs</li>
          <li>Drinks</li>
        </ul>
      </li>
      <li className="footer__list--item">
        Online store
        <ul className="dropdown">
          <li>Chocolate</li>
          <li>Drinks</li>
        </ul>
      </li>
      <li className="footer__list--item">
        Get in touch
      </li>
      <li className="footer__list--item">
        Legal terms
      </li>
      <li className="footer__list--followus">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </li>
      <li className="footer__list--copyright">
        @ 2021 CACAOS all rights reserved
      </li>
    </div>

  );
}

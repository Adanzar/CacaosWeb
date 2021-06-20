/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faInstagram
} from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export default function Footer() {
  const [inTouch, setInTouch] = useState(false);
  return (
    <div className="footer__list">
      <ul className="footer__list--container">

        <li className="footer__list--item">
          Chocolates
        </li>
        <li className="footer__list--item">
          Online store
        </li>
        { !inTouch
          ? (
            <li className="footer__list--item" onClick={() => setInTouch(!inTouch)}>
              Get in touch
            </li>
          )
          : (
            <li className="footer__list--item" onClick={() => setInTouch(!inTouch)}>
              adan@gmail.com
            </li>
          )}
        <li className="footer__list--item">
          Legal terms
        </li>
        <li className="footer__list--followus">
          <FontAwesomeIcon className="list__followus--icon" icon={faTwitter} />
          <FontAwesomeIcon className="list__followus--icon" icon={faFacebook} />
          <FontAwesomeIcon className="list__followus--icon" icon={faInstagram} />
        </li>
        <li className="footer__list--copyright">
          @ 2021 CACAOS all rights reserved
        </li>
      </ul>
    </div>

  );
}

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

// const Accordion = () => {
//   const [clicked, setClicked] = useState(false);

//   const toggle = (index) => {
//     if (clicked === index) {
//       // if clicked question is already active, then close it
//       return setClicked(null);
//     }

//     return setClicked(index);
//   };

// const AccordionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   background: #fff;
// `;

// const Container = styled.div`
//   position: absolute;
//   top: 30%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
// `;

// const Wrap = styled.div`
//   background: #272727;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   text-align: center;
//   cursor: pointer;
//   h1 {
//     padding: 2rem;
//     font-size: 2rem;
//   }
//   span {
//     margin-right: 1.5rem;
//   }
// `;

// const Dropdown = styled.div`
//   background: #1c1c1c;
//   color: #00ffb9;
//   width: 100%;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-bottom: 1px solid #00ffb9;
//   border-top: 1px solid #00ffb9;
//   p {
//     font-size: 2rem;
//   }
// `;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { login, getAccessToken } from '../../redux/actions/actionCreators';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const goToSignUp = () => history.push('/signup');

  function sendLogIn() {
    console.log(email, password);
    dispatch(login(email, password));
  }
  useEffect(() => {
    if (user?.token) {
      dispatch(getAccessToken(user?.token));
    }
  }, [user]);

  return (
    <>
      <div className="login">
        <h2>Fill in your email and password to log in</h2>
        <input
          className="login__email"
          type="email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); }}
          placeholder="Email"
        />
        <input
          className="login__password"
          type="password"
          value={password}
          onChange={(event) => { setPassword(event.target.value); }}
          placeholder="Password"
        />
        <button
          className="login__button"
          type="button"
          onClick={sendLogIn}
        >
          LOG IN
        </button>
        <div className="login__signup--question">
          Do you not have and account?
        </div>
        <div className="login__signup__button" onClick={goToSignUp}>
          Create account
        </div>

      </div>
    </>
  );
}

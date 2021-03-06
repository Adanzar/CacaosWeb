import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, getToken } from '../../redux/actions/actionCreators';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  function sendSignUp() {
    dispatch(signup(email, password));
  }
  useEffect(() => {
    if (user?.token) {
      dispatch(getToken(user?.token));
    }
  }, [user]);

  return (
    <>
      <div className="signup">
        <h2 className="signup__header">Fill in your email and password to sign up</h2>
        <input
          data-testid="input-email"
          className="signup__email"
          type="email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); }}
          placeholder="Email"
        />
        <input
          data-testid="input-password"
          className="signup__password"
          type="password"
          value={password}
          onChange={(event) => { setPassword(event.target.value); }}
          placeholder="Password"
        />
        <button
          data-testid="signup-btn"
          className="signup__button"
          type="button"
          onClick={sendSignUp}
        >
          Sign Up
        </button>

      </div>
    </>
  );
}

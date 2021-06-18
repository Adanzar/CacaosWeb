import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/actionCreators';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const user = useSelector((store) => store.user);

  function sendLogIn() {
    console.log(email, password);
    dispatch(login(email, password));
  }

  return (
    <>
      <h2>Fill in your email and password to log in</h2>
      <input
        type="email"
        value={email}
        onChange={(event) => { setEmail(event.target.value); }}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => { setPassword(event.target.value); }}
        placeholder="Password"
      />
      <button
        type="button"
        onClick={sendLogIn}
      >
        LOG IN
      </button>

    </>
  );
}

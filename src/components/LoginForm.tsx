import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const action = await dispatch(loginUser({ email, password }));

      if ('type' in action && action.type === 'LOGIN_USER_SUCCESS') {
        console.log('Login successful');
      } else if ('type' in action && action.type === 'LOGIN_USER_FAILURE') {
        console.error('Login failed', action.payload);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <form className="max-w-sm mx-auto">
      <InputField label="Email" value={email} onChange={setEmail} />
      <InputField label="Password" value={password} onChange={setPassword} />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  );
};

export default LoginForm;

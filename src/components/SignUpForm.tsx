import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/actions';

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement signup logic and dispatch registerUser action
    dispatch(registerUser({ email, password }));
  };

  return (
    <form className="max-w-sm mx-auto">
      <InputField label="Email" value={email} onChange={setEmail} />
      <InputField label="Password" value={password} onChange={setPassword} />
      <Button onClick={handleSignUp}>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;


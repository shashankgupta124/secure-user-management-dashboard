import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <LoginForm />
        <div className="mt-4">
          <p>
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

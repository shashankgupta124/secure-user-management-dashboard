import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <SignUpForm />
        <div className="mt-4">
          <p>
            Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

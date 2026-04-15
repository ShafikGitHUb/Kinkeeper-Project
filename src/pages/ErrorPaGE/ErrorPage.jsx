import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="text-center bg-white shadow-lg rounded-2xl p-10 max-w-md w-full border">
        
        <h1 className="text-5xl font-bold text-red-500">Oops!</h1>

        <p className="text-xl font-semibold mt-4">
          Something went wrong
        </p>

        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist or an error occurred.
        </p>

        <Link to="/">
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
            Back Home
          </button>
        </Link>

      </div>
    </div>
    );
};

export default ErrorPage;
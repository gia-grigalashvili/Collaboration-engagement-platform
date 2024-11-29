import React from "react";
import back from "/public/imgs/chris-lee-70l1tDAI6rM-unsplash 1.png";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container */}
      <div className="flex flex-wrap w-[90%] max-w-[1200px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="p-10 flex-1 min-w-[300px]">
          <h1 className="text-[30px] font-bold text-center mb-6">
            Get Started Now
          </h1>

          {/* Input Fields */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </label>
              <input
                id="name"
                className="rounded-[10px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </label>
              <input
                id="email"
                className="rounded-[10px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </label>
              <input
                id="password"
                className="rounded-[10px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Signup Button */}
          <button className="w-full bg-green-600 text-white py-2 rounded-[10px] mt-6 hover:bg-green-700">
            Signup
          </button>

          {/* Alternative Sign-In Options */}
          <div className="text-center my-4 text-gray-500">Or</div>
          <div className="flex gap-4">
            <button className="flex-1 bg-gray-200 py-2 rounded-[10px] hover:bg-gray-300">
              Sign in with Google
            </button>
            <button className="flex-1 bg-gray-200 py-2 rounded-[10px] hover:bg-gray-300">
              Sign in with Apple
            </button>
          </div>

          {/* Redirect to Sign-In */}
          <h1 className="text-center mt-4 text-gray-600">
            Have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Sign in
            </a>
          </h1>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex flex-1">
          <img
            className="w-full h-auto object-cover"
            src={back}
            alt="Inspirational background"
          />
        </div>
      </div>
    </div>
  );
}

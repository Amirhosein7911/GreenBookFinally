import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const isComFormat = email.includes("@") && email.endsWith(".com");

    if (isComFormat) {
      console.log("ورود موفقیت‌آمیز با ایمیل:", email, "و رمز عبور:", password);
      navigate("/home");
    } else {
      setError(
        "فرمت ایمیل وارد شده صحیح نیست. لطفاً از فرمت *@*.com استفاده کنید."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-8 text-green-700 font-bold shadow-sm font-[B-Nazanin]">
        به کتاب سبز خوش آمدید
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Email Address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-600">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-md transition-colors"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col gap-3 mt-6">
          <button
            className="bg-[#DB4437] text-white py-3 rounded-md flex items-center justify-center"
            onClick={() => navigate("/home")}
          >
            <span className="mr-2 text-lg">G</span> Login with Google
          </button>
          <button
            className="bg-[#4267B2] text-white py-3 rounded-md flex items-center justify-center"
            onClick={() => navigate("/home")}
          >
            <span className="mr-2 text-lg">f</span> Login with Facebook
          </button>
        </div>

        <div className="mt-6 text-center space-x-4">
          <a
            href="/forgot-password"
            className="text-blue-500 hover:underline text-sm"
            onClick={(e) => {
              e.preventDefault();
              alert("لینک فراموشی رمز عبور.");
            }}
          >
            Forgot Password?
          </a>
          <a
            href="/create-account"
            className="text-blue-500 hover:underline text-sm"
            onClick={(e) => {
              e.preventDefault();
              alert("لینک ایجاد حساب کاربری.");
            }}
          >
            Create an Account!
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

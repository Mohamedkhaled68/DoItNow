import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  //States
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  //imports
  const { login } = useAuth();
  const navigate = useNavigate();

  //Styles
  const styles = {
    input:
      "border || border-slate-400 || outline-none || rounded-md || px-3 || py-2 || text-base || font-medium",
    label: "text-lg || text-gray-800 || font-semibold",
  };

  //Functions & Handlers
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = inputs;
    if (!email && !password) {
      console.log("inputs must be filled");
      return;
    }

    login(inputs.email, inputs.password)
      .then(() => {
        navigate("/profile");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    console.log(inputs);
    setInputs({
      email: "",
      password: "",
    });
  };

  //Effects
  useEffect(() => {
    const { email, password } = inputs;
    if (!email || !password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [inputs.email, inputs.password]);

  return (
    <motion.div
      className="min-h-[calc(100vh-4rem)] || w-full || flex || justify-center || items-center"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="flex justify-between items-center gap-5 || px-10 py-10">
        <div className="hidden || lg:block || w-[50%]">
          <img
            className="w-full || h-full || object-cover"
            src="./assets/icons/login-icon.svg"
            alt="Login illustration"
          />
        </div>
        <div className="bg-white || px-6 || py-8 || rounded-md || w-[450px] || shadow-lg">
          <h1 className="text-center || text-3xl || text-gray-800 || font-semibold || py-3">
            Welcome Back!
          </h1>
          <p className="text-center || text-gray-600 || mb-6">
            Please log in to your account.
          </p>
          <form className="flex || flex-col || gap-5" onSubmit={handleSubmit}>
            <div className="flex || flex-col || gap-2">
              <label className={styles.label} htmlFor="username">
                Email
              </label>
              <input
                disabled={loading}
                className={styles.input}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={inputs.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex || flex-col || gap-2">
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                disabled={loading}
                className={styles.input}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={inputs.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              disabled={disabled || loading}
              className="bg-accent disabled:bg-slate-500 || hover:bg-[#5952d1] || transition-colors || duration-300 || px-4 || py-2 || text-white || text-lg || font-semibold || rounded-md || mt-5 || flex justify-center items-center"
            >
              {loading ? (
                <RotatingLines
                  visible={true}
                  height="30"
                  width="30"
                  color="grey"
                  strokeColor="#2E236C"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="text-center || py-3">
            <Link className="underline || text-accent" to={"/signup"}>
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;

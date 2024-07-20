import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const Signup = () => {
  //States
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  //imports
  const { signup } = useAuth();
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

    const { email, password, confirmPassword, username } = inputs;
    if (!email && !password && !confirmPassword && !username) {
      console.log("inputs must be filled");
      return;
    }

    if (inputs.password !== inputs.password) {
      console.log("passwords not matched");
    }

    signup(inputs.email, inputs.password, inputs.username)
      .then(() => {
        navigate("/login");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    console.log(inputs);
    setInputs({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  //Effects
  useEffect(() => {
    const { email, password, confirmPassword, username } = inputs;
    if (!email || !password || !confirmPassword || !username) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [inputs.email, inputs.password, inputs.username, inputs.confirmPassword]);

  return (
    <motion.div
      className="min-h-[calc(100vh-4rem)] || w-full || flex || justify-center || items-center"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="flex justify-between items-center gap-5 || px-10 || py-10">
        <div className="hidden || lg:block || lg:w-[50%]">
          <img
            className="w-full || h-full || object-cover"
            src="./assets/icons/signup-icon.svg"
            alt="Signup illustration"
          />
        </div>
        <div className="bg-white || px-6 || py-8 || rounded-md || w-[400px] || shadow-lg">
          <h1 className="text-center || text-3xl || text-gray-800 || font-semibold || py-3">
            Create Your Account
          </h1>
          <p className="text-center text-sm || text-gray-600 || mb-6">
            Join us today! Please fill in the details to create your account.
          </p>
          <form className="flex || flex-col || gap-5" onSubmit={handleSubmit}>
            <div className="flex || flex-col || gap-2">
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <input
                className={styles.input}
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={inputs.username}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <div className="flex || flex-col || gap-2">
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={inputs.email}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <div className="flex || flex-col || gap-2">
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                className={styles.input}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={inputs.password}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <div className="flex || flex-col || gap-2">
              <label className={styles.label} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className={styles.input}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={inputs.confirmPassword}
                onChange={handleInputChange}
                disabled={loading}
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
                "Signup"
              )}
            </button>
          </form>
          <div className="text-center || py-3">
            <Link className="underline || text-accent" to={"/login"}>
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;

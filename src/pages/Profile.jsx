import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <motion.div className="min-h-[calc(100vh-4rem)] w-full || flex justify-center items-center">
        <div className="w-[400px] || px-3 py-2 || bg-white || rounded-md || flex flex-col gap-4 || shadow-lg">
          <p className="text-slate-800 text-xl || font-semibold">
            Username :{" "}
            <span className="text-slate-500 text-lg || italic">
              {user.displayName}
            </span>
          </p>
          <p className="text-slate-800 text-xl || font-semibold">
            Email :{" "}
            <span className="text-slate-500 text-lg || italic">
              {user.email}
            </span>
          </p>
          <button
            onClick={() => {
              logout().then(() => {
                navigate("/");
              });
            }}
            className="bg-red-500 || text-white text-lg || font-semibold || px-2 py-3 || rounded-md"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Profile;

import React from "react";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      <nav className="w-full || fixed || bg-accent || px-3 py-2 || text-white">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="logo || text-3xl || font-semibold">
            DoItNow
          </Link>
          <div className="flex justify-between items-center gap-3">
            {user ? (
              <p>
                Hello, <span className="capitalize">{user.displayName}</span>
              </p>
            ) : (
              <div className="flex justify-between items-center gap-3">
                <Link
                  to={"/login"}
                  className="bg-white || text-accent text-base || font-semibold || px-2 py-1 || rounded-md"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-white || text-accent text-base || font-semibold || px-2 py-1 || rounded-md"
                >
                  Signup
                </Link>
              </div>
            )}
            <Link
              to={"/profile"}
              className="w-[45px] h-[45px] || rounded-full || flex justify-center items-center || hover:bg-slate-500 duration-200 || cursor-pointer"
            >
              <FaUser size={25} color="white" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

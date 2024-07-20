import React from "react";
import { createPortal } from "react-dom";
import { TailSpin } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuth"; // Adjust the path if necessary

const Loader = () => {
  const { loading } = useAuth();
  if (loading) {
    return createPortal(
      <div className="loader-overlay">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#2E236C"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>,
      document.getElementById("loader-root")
    );
  }
  return null;
};

export default Loader;

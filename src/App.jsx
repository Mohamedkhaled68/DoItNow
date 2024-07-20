import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Profile, Signup } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { loading } = useAuth();
  return (
    <>
      <Navbar />
      {!loading && (
        <div className="container || mx-auto || px-[1rem] || pt-[4rem] || h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { logout } from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setupAuthExceptionHandler,
  setupAuthHeaderForServiceCalls,
} from "./features/auth/utils/serviceHandler";
import { useNavigate } from "react-router-dom";
import Home from "./features/home/Home";

function App() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      setupAuthHeaderForServiceCalls(token);
    }
    setupAuthExceptionHandler(logout, navigate, dispatch);
  }, [token, navigate, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

// todo: bodylngth..., filer bylabel, editmodel

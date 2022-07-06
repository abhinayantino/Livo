import axios from "axios";
import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthProvider";
import "./login.css";
import { Navigate } from "react-router-dom";
import logo from ".././assets/logo.svg";

const Login = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://devapi.livo.ae/api/v1/admins/login`,
        {
          username,
          password,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.data?.token;
      const roles = response?.data?.a_t;
      setAuth({ username, password, accessToken, roles });

      localStorage.setItem("accessToken", accessToken);
      setUsername("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="toplogin">
          <div className="login-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="login">
            <section className="down-login">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <label className="login-label" htmlFor="username">
                  <p style={{ fontSize: "1.5rem" }}>Username:</p>
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />

                <label htmlFor="password">
                  <p style={{ fontSize: "1.5rem" }}>Password:</p>
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <button className="login-button">Sign In</button>
              </form>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;

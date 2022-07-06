import styled from "styled-components";
import { Forms } from "../components";
import { useGlobalContext } from "../context/context";
import loginImg from "../images/login-img.svg";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import ls from "localstorage-slim";
import { Navigate } from "react-router-dom";

//f874be8d-d71e-4012-b11f-3f0471a1af8a

const Login = () => {
  const { activeState, setActiveState, toggleError, loginUser, signupUser } =
    useGlobalContext();
  const user = ls.get("session");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
    id: uuid(),
  });

  //submit form
  const submitHandler = async (e) => {

    //form input simple validation
    e.preventDefault();
    if (activeState.login && !userData.email) {
      return toggleError("Email validation failed");
    } else if (activeState.login && !userData.password) {
      return toggleError("Password validation failed");
    }

    if (activeState.signup && !userData.email) {
      return toggleError("Email validation failed");
    } else if (activeState.signup && !userData.password) {
      return toggleError("Password validation failed");
    } else if (activeState.signup && !userData.username) {
      return toggleError("username validation failed");
    }

    if (activeState.signup) {
      signupUser(userData);
    } else if (activeState.login) {
      const user = { email: userData.email, password: userData.password };
      loginUser(user);
    }
  };

  // controlled values
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (user && user.id) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Wrapper>
        <div className="container">
          {!activeState.login && !activeState.signup && (
            <>
              {" "}
              <img src={loginImg} alt="login" />
              <h1>login / sign up</h1>
            </>
          )}

          {activeState.login || activeState.signup ? (
            <Forms
              submitHandler={submitHandler}
              onChangeHandler={onChangeHandler}
              userData={userData}
            />
          ) : null}

          <div className="button-container">
            <button
              className="btn"
              onClick={() => setActiveState({ login: true, signup: false })}
            >
              login
            </button>
            <button
              className="btn"
              onClick={() => setActiveState({ login: false, signup: true })}
            >
              sign up
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  .container {
    width: 90vw;
    max-width: 600px;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
  .button-container button {
    margin: 10px;
  }
`;
export default Login;

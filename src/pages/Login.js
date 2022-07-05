import styled from "styled-components";
import { Forms } from "../components";
import { useGlobalContext } from "../context/context";
import loginImg from "../images/login-img.svg";
import { createUser, login } from "../services/APIs";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ls from "localstorage-slim";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { activeState, setActiveState, toggleError } = useGlobalContext();
  const user = ls.get("id");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
    id: uuid(),
  });

  //submit form
  const submitHandler = async (e) => {
    e.preventDefault();
    if (activeState.login && !userData.email && !userData.password) {
      return toggleError({ show: true, msg: "validation failed" });
    } else if (
      activeState.signup &&
      !userData.email &&
      !userData.password &&
      !userData.userName
    ) {
      return toggleError({ show: true, msg: "validation failed" });
    }

    if (activeState.signup) {
      try {
        const { status } = await createUser(userData);
        if (status === 200) {
          navigate("/");
        }
      } catch (error) {
        toggleError({ show: true, msg: error.response.data.detail });
      }
    } else if (activeState.login) {
      const user = { email: userData.email, password: userData.password };
      try {
        const {
          status,
          data: { session },
        } = await login(user);
        ls.set("id", session.id, { ttl: session.expires });
        if (status === 200) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        toggleError({ show: true, msg: error.response.data.detail });
      }
    }
  };

  // controlled values
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
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

import React from "react";
import ls from "localstorage-slim";
import { createUser, login, logout, readUserData } from "../services/APIs";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const session = ls.get("session");

  //state
  const [activeState, setActiveState] = React.useState({
    login: false,
    signup: false,
  });
  const [user , getUser] = React.useState()


  //get errors func
  const toggleError = ( msg) => {
    toast.error(msg)
  };


  //logout func
  const logoutUser = async () => {
    if (session) {
      const id = {
        sessionId: session.id,
      };
      try {
        const { status } = await logout(id);
        if (status === 200) {
          ls.flush(true);
          window.location.reload();
        }
      } catch (error) {
        toggleError(error.response.data.detail);
      }
    }
  };


  //login func
  const loginUser = async (user) => {
    try {
      const {
        status,
        data: { session },
      } = await login(user);
      ls.set("session", session, { ttl: session.expires });
      if (status === 200) {
        navigate("/");
      }
    } catch (error) {
      toggleError( error.response.data.detail);
    }
  };


  //signup func
  const signupUser = async (userData) => {
    try {
      const { status } = await createUser(userData);

      if (status === 200) {
        setActiveState({ login: true, signup: false });
      }
    } catch (error) {
      toggleError(error.response.data.detail);
    }
  };


  //get user data func
  const getUserData = async () => {
    try {
      if (session) {
        console.log(session.userId);
        const response = await readUserData({ id: session.userId });
        getUser(response.data.account);
      }
    } catch (error) {
      toggleError(error.response.data.detail);
    }
  };

  return (
    <UserContext.Provider
      value={{
        activeState,
        setActiveState,
        toggleError,
        logoutUser,
        loginUser,
        signupUser,
        getUserData,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(UserContext);
};
export { UserContextProvider, useGlobalContext };

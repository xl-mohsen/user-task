import React from "react";
import ls from "localstorage-slim";
import { logout } from "../services/APIs";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  //state
  const [activeState, setActiveState] = React.useState({
    login: false,
    signup: false,
  });

  const [error, setError] = React.useState({ show: false, msg: "" });

  const toggleError = (show, msg) => {
    setError({ show, msg });
  };

  const logoutUser = async () => {
    const id ={
      sessionId : ls.get('id')
    }
    try {
      const { status } = await logout(id);
      if (status === 200) {
        ls.flush(true);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toggleError({ show: true, msg: error.response.data.detail });
    }
  };

  return (
    <UserContext.Provider
      value={{
        activeState,
        setActiveState,
        toggleError,
        error,
        logoutUser
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

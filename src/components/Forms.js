import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const Wrapper = styled.form`
  padding: 30px;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f7f7f7;
  .item {
    margin-bottom: 2rem;
  }
  .item {
    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: 2px;
    background-color: rgba(#fff, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    display: block;
    transition: all 0.3s;
  }
  .item:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(#000, 0.1);
    border-bottom: 3px solid #55c57a;
  }
  .item:focus:invalid {
    border-bottom: 3px solid #28b485;
  }
`;

export default function Forms({ submitHandler, onChangeHandler, userData }) {
  const { activeState } = useGlobalContext();

  return (
    <Wrapper onSubmit={submitHandler}>
      <input
        className="item"
        type="email"
        name="email"
        id="email"
        value={userData.email}
        onChange={onChangeHandler}
        placeholder="email"
      />

      <input
        type="text"
        name="password"
        id="password"
        className="item"
        value={userData.password}
        onChange={onChangeHandler}
        placeholder="password"
      />
      {activeState.signup && (
        <input
          type="text"
          name="username"
          id="username"
          className="item"
          value={userData.userName}
          onChange={onChangeHandler}
          placeholder="username"
        />
      )}

      <button type="submit" className="btn">
        {activeState.login ? "login" : "sign up"}
      </button>
    </Wrapper>
  );
}

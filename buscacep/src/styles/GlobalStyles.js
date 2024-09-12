import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
  }
`;

// Estilização do container principal
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
`;

// Estilização do título
export const Title = styled.h1`
  font-size: 85px;
  color: white;
  animation: flipTitle 1s ease-in-out;

  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  @media (max-width: 750px) {
    font-size: 50px;
  }
`;

// Estilização do container do input
export const ContainerInput = styled.div`
  background-color: rgba(160, 173, 214, 0.5);
  padding: 15px;
  margin: 35px 0;
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 20px;
    padding: 10px;
    outline: none;

    &::placeholder {
      color: #f1f1f1;
    }
  }
`;

// Estilização do botão de busca
export const ButtonSearch = styled.button`
  background-color: #3f4c77;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.2);
    background-color: #2c3659;
  }
`;

// Estilização do conteúdo principal
export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  width: 500px;
  border-radius: 8px;

  h2 {
    color: #3f4c77;
    font-size: 39px;
    margin: 20px 0;
  }

  span {
    margin-bottom: 16px;
    font-weight: bold;
  }

  @media (max-width: 750px) {
    width: 90%;
    min-height: 250px;

    h2 {
      font-size: 28px;
    }
  }
`;


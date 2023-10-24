import styled from "styled-components";

export const FormLogin = styled.div`
  height: 100%;
  width: 40vw;

  margin: 0 auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  .login h1 {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 700;
    margin: 2.4rem;
    margin-top: 12rem;
    margin-bottom: 5rem;
  }

  .formulario {
    width: 100%;
    margin-top: 5rem;
    display: flex;

    flex-direction: column;
    gap: 2.3rem;
  }

  .formulario section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .formulario section input {
    border: solid 0.05rem rgb(189, 189, 189);
    border-radius: 0.5rem;
    height: 3rem;
    padding: 1rem;
    width: 35rem;
  }

  label {
    font-size: 1.4rem;
  }

  .btn {
    width: 100%;
    margin-top: -1rem;
  }

  .btn button {
    width: 35rem;
    height: 3.3rem;
    font-size: 1.4rem;
    border: none;
    background-color: #6696cf;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .btn button:hover {
    background-color: #557cac;
  }

  .ajuda {
    width: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-weight: 600;
    font-size: 1.4rem;
  }

  .ajuda section p {
    margin: 0;
  }

  #checkbox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    height: 3rem;
  }

  #checkbox input {
    width: 1.6rem;
  }

  #checkbox p {
    margin: 0;
  }

  label {
    font-weight: 600;
  }
`;

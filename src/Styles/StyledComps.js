import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 50%;
  padding: 14px;
  border-right: 1.5px solid black;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
  margin-bottom: 1em;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100vh;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
  font-family: "Poppins";
`;

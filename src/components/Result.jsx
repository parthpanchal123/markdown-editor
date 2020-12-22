import React from "react";
import styled from "styled-components";
import { Title, TextArea, Container } from "../Styles/StyledComps";
import ReactMarkdown from "react-markdown";

const ResultArea = styled.div`
  height: 100%;
  width: 100%;
  border: none;
  font-size: :17px;
`;

export const Result = (props) => {
  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea>
        <ReactMarkdown source="# hello" />
      </ResultArea>
    </Container>
  );
};

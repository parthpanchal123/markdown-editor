import React, { useContext } from "react";
import styled from "styled-components";
import { Title, Container } from "../Styles/StyledComps";
import ReactMarkdown from "react-markdown";
import EditorContext from "../context/EditorContext";

const ResultArea = styled.div`
  height: 100%;
  width: 100%;
  border: none;
  font-size: :17px;
  font-family : "Poppins";
`;

export const Result = () => {
  const { markdownText } = useContext(EditorContext);
  return (
    <EditorContext.Provider value={markdownText}>
      <Container>
        <Title>Converted Text</Title>
        <ResultArea>
          <ReactMarkdown source={markdownText} />
        </ResultArea>
      </Container>
    </EditorContext.Provider>
  );
};

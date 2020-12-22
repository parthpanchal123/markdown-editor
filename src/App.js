import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Title } from "./Styles/StyledComps";
import { MarkedInput } from "./components/MarkedInput";
import { Result } from "./components/Result";
import EditorContext from "./context/EditorContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const App = () => {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };
  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title> ✏ Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
};

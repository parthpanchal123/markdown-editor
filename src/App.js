import "./App.css";
import styled from "styled-components";
import { Title } from "./Styles/StyledComps";
import { MarkedInput } from "./components/MarkedInput";
import { Result } from "./components/Result";

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
  return (
    <AppContainer>
      <Title>Markdown Editor</Title>
      <EditorContainer>
        <MarkedInput />
        <Result />
      </EditorContainer>
    </AppContainer>
  );
};

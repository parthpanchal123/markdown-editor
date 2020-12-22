import "./App.css";
import styled from "styled-components";

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

const Title = styled.div`
  font-size: 25px;
  font-weight: 700px;
  font-famiy: "Lato", sans-serif;
  margin-bottom: 1em;
`;
function App() {
  return (
    <AppContainer>
      <Title>Hello</Title>
      <EditorContainer />
    </AppContainer>
  );
}

export default App;

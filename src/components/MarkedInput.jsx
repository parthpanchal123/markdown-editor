import React, { useContext } from "react";
import { Title, TextArea, Container } from "../Styles/StyledComps";
import EditorContext from "../context/EditorContext";

export const MarkedInput = () => {
  const { setMarkdownText } = useContext(EditorContext);
  const handleTextChange = (e) => {
    setMarkdownText(e.currentTarget.value);
  };
  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea
        autoFocus
        onChange={(e) => handleTextChange(e)}
        placeholder="Start typing here ..."
      />
    </Container>
  );
};

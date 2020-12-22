import React from "react";
import styled from "styled-components";
import { Title, TextArea, Container } from "../Styles/StyledComps";

export const MarkedInput = (props) => {
  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea />
    </Container>
  );
};

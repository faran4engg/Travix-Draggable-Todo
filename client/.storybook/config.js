import React from "react";
import styled from "styled-components";
import { configure, addDecorator } from "@storybook/react";
import { Container } from "semantic-ui-react";

const CustomDiv = styled.div`
  padding: 2em;
`;

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <Container>
    <CustomDiv>{story()}</CustomDiv>
  </Container>
));

configure(loadStories, module);

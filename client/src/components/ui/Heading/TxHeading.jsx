import React from "react";
import styled from "styled-components";
import BillabongFont from "../../../assets/font/Billabong.woff";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const H1 = styled.h1`
  font-family: BillabongFont, "BillabongFont";
  text-align: center;
  font-weight: 100;
  font-size: 4rem;
  word-spacing: 0.5rem;

  color: ${props => (props.color ? props.color : "#ccc")};
  text-shadow: 0px 4px 0 black;

 &:hover{
  color: #e4e1e1;
  text-shadow: 0px 4px 0 ${props => (props.color ? props.color : "#ccc")};

 
 }

  @font-face {
    font-family: BillabongFont;
    font-style: normal;
    font-weight: normal;
    src: url( '${BillabongFont}') format("woff");
  }
`;

const TxHeading = ({ content, color, path }) => {
  return path ? (
    <Link to={path}>
      <H1 color={color}>{content}</H1>
    </Link>
  ) : (
    <H1 color={color}>{content}</H1>
  );
};

TxHeading.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
  path: PropTypes.string
};

export default TxHeading;

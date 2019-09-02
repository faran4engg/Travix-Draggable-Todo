import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TxForm from "../Form/TxForm";

const Anchor = styled.a`
  cursor: pointer;
  opacity: 1;
  color: white;
  &:hover {
    opacity: 1;
    color: #fff;
  }
  span:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const renderForm = (listName, setIsFormOpen) => (
  <TxForm onCancel={() => setIsFormOpen(false)} listName={listName} />
);

const renderAddButton = setIsFormOpen => (
  <Anchor className="item" onClick={() => setIsFormOpen(true)}>
    <i aria-hidden="true" className="add square icon"></i>
    <span>Add a Card</span>
  </Anchor>
);

const TxAddCardButton = props => {
  const { listName } = props;
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return isFormOpen
    ? renderForm(listName, setIsFormOpen)
    : renderAddButton(setIsFormOpen);
};

TxAddCardButton.propTypes = {
  listName: PropTypes.string
};

export default TxAddCardButton;

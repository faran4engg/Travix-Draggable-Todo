import React from "react";
import { Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TxHeading from "../Heading/TxHeading";

const StyledSegment = styled(Segment)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) !important;
  border-radius: 0 !important;
`;

const TxMenu = props => {
  return (
    <React.Fragment>
      <StyledSegment inverted textAlign="center">
        <TxHeading content="Travix" path={props.path} />
      </StyledSegment>
    </React.Fragment>
  );
};

TxMenu.propTypes = {
  path: PropTypes.string
};

export default TxMenu;

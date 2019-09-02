import React from "react";
import PropTypes from "prop-types";

const TxLoader = ({ showButton }) => {
  return (
    <div className="ui card fluid">
      <div className="content">
        <div className="ui placeholder">
          <div className="header">
            <div className="very short line"></div>
          </div>
          <div className="paragraph">
            <div className="line"></div>
            <div className="medium line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      {showButton ? (
        <div className="extra content">
          <div className="ui disabled primary button right floated"></div>
          <div className="ui disabled button left floated"></div>
        </div>
      ) : null}
    </div>
  );
};

TxLoader.propTypes = {
  showButton: PropTypes.bool
};

export default TxLoader;

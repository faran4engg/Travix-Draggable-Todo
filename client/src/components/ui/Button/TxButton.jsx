import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";

const TxButton = props => {
  const {
    type,
    positive,
    disabled,
    color,
    animated,
    floated,
    click,
    content,
    iconName,
    size,
    fluid
  } = props;
  return (
    <Button
      type={type}
      positive={positive}
      disabled={disabled}
      color={color}
      animated={animated && animated}
      floated={floated}
      onClick={click}
      size={size}
      fluid={fluid}
    >
      {animated ? (
        <React.Fragment>
          <Button.Content hidden>{content}</Button.Content>
          <Button.Content visible>
            <Icon name={iconName} />
          </Button.Content>
        </React.Fragment>
      ) : (
        <Button.Content>{content}</Button.Content>
      )}
    </Button>
  );
};

TxButton.defaultProps = {
  animated: false
};

TxButton.propTypes = {
  type: PropTypes.string,
  positive: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  floated: PropTypes.string,
  click: PropTypes.func,
  content: PropTypes.string,
  iconName: PropTypes.string,
  size: PropTypes.string,
  fluid: PropTypes.bool
};

export default TxButton;

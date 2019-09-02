import React from "react";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

const TxInput = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <React.Fragment>
      <Form.Input
        {...field}
        {...props}
        error={touched[field.name] && errors[field.name]}
      />
    </React.Fragment>
  );
};

TxInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};
export default TxInput;

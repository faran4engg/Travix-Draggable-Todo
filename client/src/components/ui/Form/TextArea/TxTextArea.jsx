import React from "react";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

const TxTextArea = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <React.Fragment>
      <Form.TextArea
        icon="search"
        placeholder="Search..."
        {...field}
        {...props}
        error={touched[field.name] && errors[field.name]}
      />
    </React.Fragment>
  );
};
TxTextArea.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};
export default TxTextArea;

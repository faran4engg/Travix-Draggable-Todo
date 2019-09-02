import React, { useState, Fragment } from "react";
import { Formik, Field } from "formik";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCard, editCard } from "../../../redux/actions";
import PropTypes from "prop-types";
import * as yup from "yup";
import TxInput from "./Input/TxInput";
import TxTextArea from "./TextArea/TxTextArea";
import TxButton from "../Button/TxButton";

const userSchema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(5)
    .matches(/^[a-z\d\-_\s]+$/i),

  description: yup
    .string()
    .required()
    .min(5)
    .max(128)
});

const TxForm = props => {
  const { onCancel, dispatch, listName, editData } = props;
  const [formData, setFormData] = useState(editData);

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    setFormData(values);

    editData
      ? dispatch(editCard(listName, { ...values, id: editData.id }))
      : dispatch(addCard(listName, values));

    actions.setSubmitting(false);
    onCancel();
  };

  return (
    <Fragment>
      <Formik
        initialValues={formData}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        {formikProps =>
          !formikProps.isSubmitting ? (
            <Form onSubmit={formikProps.handleSubmit}>
              <Field
                label="Title"
                type="text"
                placeholder="Title"
                name="title"
                value={formikProps.values.title || ""}
                component={TxInput}
              />
              <Field
                label="Description"
                name="description"
                value={formikProps.values.description || ""}
                type="text"
                placeholder="Description"
                component={TxTextArea}
              />
              <TxButton
                type="submit"
                positive
                animated="vertical"
                disabled={!formikProps.isValid || !formikProps.dirty}
                content="Save"
                iconName="save"
              />
              <TxButton
                color="black"
                animated="vertical"
                content="Cancel"
                iconName="cancel"
                click={onCancel}
              />
            </Form>
          ) : null
        }
      </Formik>
    </Fragment>
  );
};

TxForm.propTypes = {
  onCancel: PropTypes.func,
  dispatch: PropTypes.func,
  listName: PropTypes.string,
  editData: PropTypes.object
};

export default connect()(TxForm);

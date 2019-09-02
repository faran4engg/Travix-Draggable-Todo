import React from "react";
import { Form } from "semantic-ui-react";
import { Formik, Field } from "formik";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TxTextArea from "./TxTextArea";

storiesOf("TxTextArea", module).add(
  "simple info",
  withInfo("Basic usage of the button")(() => (
    <Formik>
      {() => (
        <Form>
          <Field
            label="Title"
            type="text"
            placeholder="Title"
            name="title"
            value=""
            component={TxTextArea}
          />
        </Form>
      )}
    </Formik>
  ))
);

import React from "react";
import { Form } from "semantic-ui-react";
import { Formik, Field } from "formik";
import { shallow } from "enzyme";
import TxTextArea from "../TxTextArea";

describe("TxTextArea", () => {
  it("should render correctly ", () => {
    const component = shallow(
      <Formik>
        {() => (
          <Form>
            <Field
              label="Title"
              type="text"
              placeholder="Title"
              name="title"
              value="Sample Title"
              component={TxTextArea}
            />
          </Form>
        )}
      </Formik>
    );

    expect(component).toMatchSnapshot();
  });
});

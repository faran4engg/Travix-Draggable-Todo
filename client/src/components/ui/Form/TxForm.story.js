import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { storiesOf } from "@storybook/react";

import { withInfo } from "@storybook/addon-info";
import TxForm from "./TxForm";

const store = configureStore()();
storiesOf("TxForm", module)
  .add(
    "Basic Form",
    withInfo("")(() => (
      <Provider store={store}>
        <TxForm
          editData={{
            id: "123",
            title: "",
            description: ""
          }}
          listName="Todo List"
        />
      </Provider>
    ))
  )
  .add(
    "With Validation Errors",
    withInfo("")(() => (
      <Provider store={store}>
        <TxForm
          editData={{
            id: "123",
            title: "Test",
            description:
              "Validations are not fulfilled hence Save buttton is disabled. Title must atleast have 5 characters"
          }}
          listName="Todo List"
        />
      </Provider>
    ))
  );

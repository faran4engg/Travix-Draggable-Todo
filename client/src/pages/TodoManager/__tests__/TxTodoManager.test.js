import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { shallow } from "enzyme";
import TxTodoManager from "../TxTodoManager";
describe("TxTodoManager", () => {
  const store = configureStore()();
  it("should render correctly ", () => {
    const component = shallow(
      <Provider store={store}>
        <TxTodoManager />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});

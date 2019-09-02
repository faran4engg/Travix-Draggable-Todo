import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import TxAddCardButton from "../TxAddCardButton";

describe("TxAddCardButton", () => {
  it("should render correctly ", () => {
    const component = mount(<TxAddCardButton listName="todo" />);
    expect(component.find("a")).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
  
  describe("when clicked on Add Card button", () => {
    it("it should display the form", () => {
      const store = configureStore()();
      const component = mount(
        <Provider store={store}>
          <TxAddCardButton listName="todo" />
        </Provider>
      );
      const anchor = component.find("a");
      anchor.simulate("click");
      expect(component.find("TxForm")).toHaveLength(1);
    });
  });
});

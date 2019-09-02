import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import TxForm from "../TxForm";

describe("TxForm", () => {
  it("should render correctly ", () => {
    const store = configureStore()();
    const component = shallow(
      <Provider store={store}>
        <TxForm
          editData={{
            id: "123",
            title: "Sample Title",
            description: "Sample Desc"
          }}
          listName={"todo"}
        />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  describe("when not passing editData prop", () => {
    it("should render empty form with blank fields ", () => {
      const store = configureStore()();
      const component = mount(
        <Provider store={store}>
          <TxForm />
        </Provider>
      );

      expect(component.find("TxInput").value).toEqual(undefined);
      expect(component.find("TxTextArea").value).toEqual(undefined);
    });
  });

  describe("when passing editData prop with data", () => {
    it("should render form with prepopulated values ", () => {
      const store = configureStore()();
      const component = mount(
        <Provider store={store}>
          <TxForm
            editData={{
              id: "123",
              title: "Sample",
              description: "Sample Desc"
            }}
          />
        </Provider>
      );

      expect(component.find("TxInput")).toHaveLength(1);
      expect(component.find("TxTextArea")).toHaveLength(1);
    });
  });
});

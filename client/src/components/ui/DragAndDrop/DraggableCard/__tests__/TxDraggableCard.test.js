import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import TxDraggableCard from "../TxDraggableCard";

describe("TxDraggableCard", () => {
  it("should render correctly ", () => {
    const store = configureStore()();
    const component = shallow(
      <Provider store={store}>
        <TxDraggableCard
          key="123"
          cardData={{
            title: "Sample Card",
            description: "sample description",
            id: "a1b2c3"
          }}
          listName="Todo"
          index={0}
        />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});

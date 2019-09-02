import React from "react";
import { shallow } from "enzyme";
import TxHome from "../TxHome";

describe("TxHome", () => {
  it("should render correctly ", () => {
    const component = shallow(<TxHome />);
    expect(component).toMatchSnapshot();
  });
});

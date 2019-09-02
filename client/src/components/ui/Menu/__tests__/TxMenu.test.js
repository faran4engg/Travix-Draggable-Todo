import React from "react";
import { shallow } from "enzyme";
import TxMenu from "../TxMenu";

describe("TxMenu", () => {
  it("should render correctly ", () => {
    const component = shallow(<TxMenu />);
    expect(component).toMatchSnapshot();
  });
});

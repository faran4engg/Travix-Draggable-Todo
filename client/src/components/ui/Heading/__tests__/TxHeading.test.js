import React from "react";

import { shallow, mount } from "enzyme";
import TxHeading from "../TxHeading";
describe("TxHeading", () => {
  it("should render correctly ", () => {
    const component = shallow(<TxHeading content="Travix" color="#80e0f6" />);

    expect(component).toMatchSnapshot();
  });

  describe("when passing props", () => {
    it("should render content correctly ", () => {
      const component = mount(<TxHeading content="Travix" color="#80e0f6" />);
      expect(component.find("h1").text()).toEqual("Travix");
    });
  });
});

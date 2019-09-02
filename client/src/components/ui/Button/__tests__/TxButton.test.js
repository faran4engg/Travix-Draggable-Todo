import React from "react";

import { shallow, mount } from "enzyme";
import TxButton from "../TxButton";

describe("TxButton", () => {
  it("should render correctly ", () => {
    const component = shallow(<TxButton content="Delete" />);
    expect(component).toMatchSnapshot();
  });
  describe("when animated props is not passed", () => {
    it("should show button text ", () => {
      const component = mount(<TxButton content="Delete" />);
      expect(component.find("TxButton").text()).toEqual("Delete");
    });

    it("should not show animated icon ", () => {
      const component = shallow(<TxButton />);
      expect(component.find("Icon")).toHaveLength(0);
    });
  });
  describe("when animated props is passed", () => {
    it("should show button text ", () => {
      const component = mount(<TxButton animated="fade" content="Edit" />);
      expect(component.find("TxButton").text()).toEqual("Edit");
    });

    it("should show animated icon ", () => {
      const component = shallow(<TxButton animated="fade" />);
      expect(component.find("Icon")).toHaveLength(1);
    });
  });
});

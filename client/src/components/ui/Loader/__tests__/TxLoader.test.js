import React from "react";
import { shallow } from "enzyme";
import TxLoader from "../TxLoader";

describe("TxLoader", () => {
  it("should render correctly ", () => {
    const component = shallow(<TxLoader />);
    expect(component).toMatchSnapshot();
  });

  describe("when passing props", () => {
    it("should show loading bar button when showButton prop is passed", () => {
      const component = shallow(<TxLoader showButton />);
      expect(component.find(".button")).toHaveLength(2);
    });

    it("should now show loading bar button when showButton prop is not passed", () => {
      const component = shallow(<TxLoader />);
      expect(component.find(".button")).toHaveLength(0);
    });
  });
});

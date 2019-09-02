import React from "react";
import { shallow } from "enzyme";
import TxList from "../TxList";

describe("TxList", () => {
  it("should render correctly ", () => {
    const component = shallow(<TxList listName={"todo"}></TxList>);
    expect(component).toMatchSnapshot();
  });

  describe("when loading lists", () => {
    it("should render TxLoader ", () => {
      const component = shallow(<TxList listName={"todo"}></TxList>);
      expect(component.find("TxLoader")).toHaveLength(1);
    });
  });

  describe("when loading cards", () => {
    it("should render TxCards ", () => {
      const component = shallow(
        <TxList
          listName={"todo"}
          cards={[
            {
              id: "12",
              title: "title",
              description: "desc"
            }
          ]}
        ></TxList>
      );
      expect(component.props().cards).not.toBe(0);
    });
  });
});

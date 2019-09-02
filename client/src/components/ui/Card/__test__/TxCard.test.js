import React from "react";
import { shallow, mount } from "enzyme";
import TxCard from "../TxCard";

describe("TxCard", () => {
  it("should render correctly ", () => {
    const component = shallow(
      <TxCard
        key="a1b2c3"
        cardData={{
          title: "Sample Card",
          description: "sample description",
          id: "a1b2c3"
        }}
        cardId="a1b2c3"
        listName="todo"
        index={0}
      />
    );
    expect(component).toMatchSnapshot();
  });

  describe("when passing canModify prop", () => {
    it("should render Action buttons ", () => {
      const component = mount(
        <TxCard
          key="a1b2c3"
          cardData={{
            title: "Sample Card",
            description: "sample description",
            id: "a1b2c3"
          }}
          cardId="a1b2c3"
          canModify
          listName="todo"
          index={0}
        />
      );
      expect(component.find("TxButton")).toHaveLength(2);
    });
  });

  describe("when not passing canModify prop", () => {
    it("should render Action buttons ", () => {
      const component = mount(
        <TxCard
          key="a1b2c3"
          cardData={{
            title: "Sample Card",
            description: "sample description",
            id: "a1b2c3"
          }}
          cardId="a1b2c3"
          canModify={false}
          listName="todo"
          index={0}
        />
      );
      expect(component.find("TxButton")).toHaveLength(0);
    });
  });

  describe("when passing cardData prop", () => {
    let component;
    beforeEach(() => {
      component = mount(
        <TxCard
          key="a1b2c3"
          cardData={{
            title: "Sample Card",
            description: "sample description",
            id: "a1b2c3"
          }}
          cardId="a1b2c3"
          listName="todo"
          index={0}
        />
      );
    });

    it("should render Title correctly ", () => {
      expect(component.find(".header")).toHaveLength(1);
    });
    it("should render Description correctly ", () => {
      expect(component.find(".description")).toHaveLength(1);
    });

    it("should render Edit button correctly ", () => {
      expect(
        component
          .find("TxButton")
          .at(0)
          .text()
      ).toEqual("Edit");
    });
    it("should render Delete button correctly ", () => {
      expect(
        component
          .find("TxButton")
          .at(1)
          .text()
      ).toEqual("Delete");
    });
  });
});

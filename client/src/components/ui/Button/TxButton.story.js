import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TxButton from "./TxButton";

storiesOf("TxButton", module)
  .add(
    "Basic Button",
    withInfo("")(() => (
      <TxButton
        color="black"
        animated="fade"
        size="normal"
        content="Go"
        iconName="arrow right"
      />
    ))
  )
  .add(
    "Size - Huge",
    withInfo("")(() => (
      <TxButton
        color="red"
        animated="fade"
        size="huge"
        content="Info"
        iconName="info"
      />
    ))
  )
  .add(
    " No Animation",
    withInfo("")(() => <TxButton color="blue" size="huge" content="Go" />)
  )
  .add(
    " Animation - Fade",
    withInfo("")(() => (
      <TxButton
        color="pink"
        animated="fade"
        size="large"
        content="Pin"
        iconName="pin"
      />
    ))
  )
  .add(
    " Animation - Vertical",
    withInfo("")(() => (
      <TxButton
        color="purple"
        animated="vertical"
        content="Delete"
        iconName="trash"
      />
    ))
  )
  .add(
    " Animation - Horizontal",
    withInfo("")(() => (
      <TxButton
        color="orange"
        animated="horizontal"
        content="Send"
        iconName="send"
      />
    ))
  )
  .add(
    " Floated - Left",
    withInfo("")(() => (
      <TxButton
        color="yellow"
        animated="horizontal"
        floated="left"
        content="Tag"
        iconName="tag"
      />
    ))
  )
  .add(
    " Floated - Right",
    withInfo("")(() => (
      <TxButton
        color="teal"
        animated="vertical"
        floated="right"
        content="Attach"
        iconName="attach"
      />
    ))
  )
  .add(
    "Fluid",
    withInfo("")(() => (
      <TxButton
        color="green"
        fluid
        animated="fade"
        size="huge"
        content="Save"
        iconName="save"
      />
    ))
  );

import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TxHeading from "./TxHeading";

storiesOf("TxHeading", module)
  .add("Basic Heading", withInfo("")(() => <TxHeading content="Travix" />))
  .add(
    "Different Color",
    withInfo("")(() => <TxHeading content="Travix" color="blue" />)
  );

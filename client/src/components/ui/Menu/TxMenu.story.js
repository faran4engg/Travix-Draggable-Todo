import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TxMenu from "./TxMenu";

storiesOf("TxMenu", module).add(
  "Basic Menu Header",
  withInfo("Basic usage of the button")(() => <TxMenu />)
);

import React from "react";

import { storiesOf } from "@storybook/react";

import { withInfo } from "@storybook/addon-info";
import TxLoader from "./TxLoader";

storiesOf("TxLoader", module)
  .add("Basic Loader", withInfo("")(() => <TxLoader />))
  .add("Card Loader", withInfo("")(() => <TxLoader showButton />));

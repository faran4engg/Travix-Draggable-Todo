import React from "react";

import { storiesOf } from "@storybook/react";

import { withInfo } from "@storybook/addon-info";
import TxCard from "./TxCard";
import TxLoader from "../Loader/TxLoader";

storiesOf("TxCard", module)
  .add(
    "Basic Card",
    withInfo("")(() => (
      <TxCard
        cardData={{
          id: "123",
          title: "Title",
          description: "Description"
        }}
        listName="Todo"
        index={0}
      />
    ))
  )
  .add("Card Loader with Buttons", withInfo("")(() => <TxLoader showButton />))
  .add(
    "Non Editable",
    withInfo("")(() => (
      <TxCard
        cardData={{
          id: "123",
          title: "Title",
          description: "Description"
        }}
        listName="Todo"
        canModify={false}
        index={0}
      />
    ))
  )
  .add("Card Loader with No Buttons", withInfo("")(() => <TxLoader />));

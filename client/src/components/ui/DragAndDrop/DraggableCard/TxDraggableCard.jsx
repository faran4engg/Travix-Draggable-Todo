import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import TxForm from "../../Form/TxForm";
import TxCard from "../../Card/TxCard";

import { deleteCard } from "../../../../redux/actions";

const Div = styled.div`
  margin: 1em 0 !important;
`;

const TxDraggableCard = props => {
  const { cardData, index, listName } = props;
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleDelete = (listName, cardId) => {
    props.dispatch(deleteCard(listName, cardId));
  };

  return isEditMode ? (
    <TxForm
      editData={cardData}
      onCancel={() => setIsEditMode(false)}
      listName={listName}
    />
  ) : (
    <Draggable draggableId={cardData.id} index={index}>
      {provided => (
        <Div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TxCard
            cardData={cardData}
            onEdit={handleEdit}
            canModify={listName !== "done"}
            onDelete={() => handleDelete(listName, cardData.id)}
          />
        </Div>
      )}
    </Draggable>
  );
};

TxDraggableCard.propTypes = {
  cardData: PropTypes.object,
  index: PropTypes.number,
  listName: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(TxDraggableCard);

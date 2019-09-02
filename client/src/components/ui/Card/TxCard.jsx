import React from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import TxButton from "../Button/TxButton";

const TxCard = props => {
  const { cardData, onEdit, onDelete, canModify } = props;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{cardData.title}</Card.Header>
        <Card.Description>{cardData.description}</Card.Description>
      </Card.Content>
      {canModify ? (
        <Card.Content extra>
          <TxButton
            color="violet"
            animated="vertical"
            floated="left"
            click={onEdit}
            content="Edit"
            iconName="edit"
          />
          <TxButton
            color="pink"
            animated="vertical"
            floated="right"
            click={onDelete}
            content="Delete"
            iconName="trash"
          />
        </Card.Content>
      ) : null}
    </Card>
  );
};

TxCard.defaultProps = {
  canModify: true
};

TxCard.propTypes = {
  cardData: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  canModify: PropTypes.bool
};

export default TxCard;

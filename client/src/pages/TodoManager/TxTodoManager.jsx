import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import PropTypes from "prop-types";

import { reOrder, loadTodoList, updateLists } from "../../redux/actions";
import TxList from "../../components/ui/List/TxList";
import TxMenu from "../../components/ui/Menu/TxMenu";

class TxTodoManager extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadTodoList());
  }

  getLists = lists => {
    return (
      lists &&
      Object.keys(lists).map(listName => (
        <Grid.Column key={listName}>
          <TxList listName={listName} {...lists[listName]}></TxList>
        </Grid.Column>
      ))
    );
  };

  onDragEnd = result => {
    const { destination, source } = result;
    const { lists } = this.props;

    if (!destination) return;

    this.props.dispatch(
      reOrder(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      )
    );
    this.props.dispatch(updateLists(lists));
  };

  render() {
    const { lists } = this.props;

    return (
      <React.Fragment>
        <TxMenu path="/" />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            <Grid relaxed columns={3} stackable>
              <Grid.Row>{lists && this.getLists(lists)}</Grid.Row>
            </Grid>
          </Container>
        </DragDropContext>
      </React.Fragment>
    );
  }

  static propTypes = {
    lists: PropTypes.object,
    dispatch: PropTypes.func
  };
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(TxTodoManager);

import { CONSTANTS } from "../actions";
import axios from "../../axios/axios-todo-instance";

export const loadTodoList = () => {
  return async dispatch => {
    const todoListData = await axios
      .get("/tasks")
      .then(res => res.data)
      .then(todoLists => todoLists);
    return dispatch({
      type: CONSTANTS.LOAD_TODO_LISTS,
      payload: todoListData.lists
    });
  };
};

export const addCard = (listName, data) => {
  return async dispatch => {
    await axios
      .post("/task/create", {
        listName,
        data
      })
      .then(res => {
        const newCard = res.data;
        return dispatch({
          type: CONSTANTS.ADD_CARD,
          payload: { listName, newCard }
        });
      });
  };
};

export const editCard = (listName, data) => {
  return async dispatch => {
    await axios
      .put("/task/update", {
        listName,
        data
      })
      .then(() => {
        return dispatch({
          type: CONSTANTS.EDIT_CARD,
          payload: { listName, data }
        });
      });
  };
};

export const deleteCard = (listName, cardId) => {
  return async dispatch => {
    await axios.delete(`/task/delete/${listName}/${cardId}`);

    return dispatch({
      type: CONSTANTS.DELETE_CARD,
      payload: { listName, cardId }
    });
  };
};

export const reOrder = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd
) => {
  return async dispatch => {
    return await dispatch({
      type: CONSTANTS.ON_DRAG,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      }
    });
  };
};

export const updateLists = lists => {
  return async dispatch => {
    await axios.post("/task/updateLists", {
      lists: { ...lists }
    });

    return dispatch({
      type: CONSTANTS.UPDATE_LISTS,
      payload: { lists }
    });
  };
};

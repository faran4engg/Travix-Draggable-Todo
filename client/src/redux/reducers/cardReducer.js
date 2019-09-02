import { CONSTANTS } from "../actions";

const initialState = {
  todo: {
    id: 0,
    title: "To do",
    color: "#ef5350",
    cards: []
  },
  inProgress: {
    id: 1,
    title: "In Progress",
    color: "#4fc3f7",
    cards: []
  },
  done: { id: 2, title: "Done", color: "#dce775", cards: [] }
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOAD_TODO_LISTS: {
      const updatedState = action.payload;

      return {
        ...updatedState
      };
    }

    case CONSTANTS.ADD_CARD: {
      const { listName, newCard } = action.payload;
      const newState = { ...state };

      return {
        ...newState,
        [listName]: {
          ...newState[listName],
          cards: [...newState[listName].cards, { ...newCard.data }]
        }
      };
    }

    case CONSTANTS.EDIT_CARD: {
      const { listName, data } = action.payload;
      const newState = { ...state };

      const list = { ...newState[listName] };
      const cardArr = [...list.cards];

      const updatedCardList = cardArr.map(card => {
        if (card.id === data.id) {
          return data;
        }
        return card;
      });

      return {
        ...newState,
        [listName]: {
          ...list,
          cards: [...updatedCardList]
        }
      };
    }

    case CONSTANTS.DELETE_CARD: {
      const { listName, cardId } = action.payload;
      const newState = { ...state };

      const list = {
        [listName]: {
          ...newState[listName]
        }
      };

      const cardArr = [...list[listName].cards];

      const newCardList = cardArr.filter(card => card.id !== cardId);

      return {
        ...newState,
        ...list,
        [listName]: {
          ...newState[listName],
          cards: [...newCardList]
        }
      };
    }

    case CONSTANTS.ON_DRAG: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      } = action.payload;

      const newState = { ...state };

      // if re-order in the same list then:
      if (droppableIdStart === droppableIdEnd) {
        const list = newState[droppableIdStart];
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      // Being specific: if re-order between other list then:
      if (droppableIdStart !== droppableIdEnd) {
        const sourceList = newState[droppableIdStart];
        const card = sourceList.cards.splice(droppableIndexStart, 1);

        const destinationList = newState[droppableIdEnd];
        destinationList.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    }

    case CONSTANTS.UPDATE_LISTS: {
      const updatedState = action.payload.lists;

      return {
        ...state,
        ...updatedState
      };
    }

    default:
      return state;
  }
};

export default cardReducer;

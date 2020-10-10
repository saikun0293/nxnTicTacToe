import {
  END_GAME,
  UPDATE_DIMENSIONS,
  UPDATE_TURN,
  UPDATE_ROUND,
  RESET_ROUND
} from "./gameTypes";

const game = {
  dimensions: 3,
  round: 1,
  turn: "X",
  endGame: false,
};

const gameReducer = (state = game, action) => {
  switch (action.type) {
    case UPDATE_DIMENSIONS:
      return {
        ...state,
        dimensions: action.payload,
      };
    case UPDATE_TURN: {
      const nextTurn = action.payload === "X" ? "O" : "X";
      return {
        ...state,
        turn: nextTurn,
      };
    }
    case UPDATE_ROUND:
      return {
        ...state,
        round: state.round + 1,
      };
    case END_GAME:
      return {
        ...state,
        endGame: true,
      };
    case RESET_ROUND:
      return{
        ...state,
        round:1,
      };
    default:
      return state;
  }
};

export default gameReducer;

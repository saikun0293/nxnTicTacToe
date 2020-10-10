import {
  END_GAME,
  UPDATE_DIMENSIONS,
  UPDATE_TURN,
  UPDATE_ROUND,
  RESET_ROUND,
} from "./gameTypes";

const updateTurn = (currentTurn) => {
  return {
    type: UPDATE_TURN,
    payload: currentTurn,
  };
};

const updateRound = () => {
  return {
    type: UPDATE_ROUND,
  };
};

const updateDimension = (dimension) => {
  return {
    type: UPDATE_DIMENSIONS,
    payload: dimension,
  };
};

const endGame = () => {
  return {
    type: END_GAME,
  };
};

const resetRound = ()=>{
  return {
    type: RESET_ROUND,
  }
}

export { updateTurn, updateRound, updateDimension, endGame, resetRound };

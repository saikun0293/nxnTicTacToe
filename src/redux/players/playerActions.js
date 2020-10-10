import {
  RED_AUTHENTICATE,
  BLUE_AUTHENTICATE,
  UPDATE_SCORE,
} from "./playerTypes";

const redAuthenticated = (data) => {
  return {
    type: RED_AUTHENTICATE,
    payload: data,
  };
};

const blueAuthenticated = (data) => {
  return {
    type: BLUE_AUTHENTICATE,
    payload: data,
  };
};

const updateScore = (data) => {
  return {
    type: UPDATE_SCORE,
    payload: data,
  };
};

export { redAuthenticated, blueAuthenticated, updateScore };

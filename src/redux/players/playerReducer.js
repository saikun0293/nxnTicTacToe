import {
  RED_AUTHENTICATE,
  BLUE_AUTHENTICATE,
  UPDATE_SCORE,
} from "./playerTypes";

const player = {
  red: {
    id: "",
    username: "",
    password: "",
    score: 0,
    verified: false,
  },
  blue: {
    id: "",
    username: "",
    password: "",
    score: 0,
    verified: false,
  },
};

const playerReducer = (state = player, action) => {
  // console.log("payload", action.payload);
  switch (action.type) {
    case RED_AUTHENTICATE:
      return {
        ...state,
        red: { ...action.payload, verified: true },
      };
    case BLUE_AUTHENTICATE:
      return {
        ...state,
        blue: { ...action.payload, verified: true },
      };
    case UPDATE_SCORE: {
      const team = action.payload;
      if (team === "red") {
        return {
          ...state,
          red: {
            ...state.red,
            total_score: state.red.total_score+1,
          },
        };
      } else if (team === "blue") {
        return {
          ...state,
          blue: {
            ...state.blue,
            total_score: state.blue.total_score+1,
          },
        };
      }
      break;
    }
    default:
      return state;
  }
};

export default playerReducer;

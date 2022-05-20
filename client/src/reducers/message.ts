import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initailState = {};

export default function (state = initailState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state
  }
}
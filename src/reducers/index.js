import { combineReducers } from "redux";
import { UPDATE_TIME } from "../actions";

const now = new Date();

const initialClockState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function ClockReducer(state = initialClockState, action) {
  switch (action.type) {
    case UPDATE_TIME: {
      let now = action.payload;
      let nowhours = now.getHours();
      let nowMinutes = now.getMinutes();
      let nowSeconds = now.getSeconds();
      return {
        hours: nowhours,
        minutes: nowMinutes,
        seconds: nowSeconds,
      };
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  clockState: ClockReducer,
});

export default rootReducer;

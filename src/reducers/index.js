import { combineReducers } from "redux";
import { UPDATE_TIME } from "../actions";

const initialClockState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  hoursDegrees: 0,
  minDegrees: 0,
  secDegrees: 0,
};

function ClockReducer(state = initialClockState, action) {
  switch (action.type) {
    case UPDATE_TIME: {
      let now = action.payload;
      let nowhours = now.getHours();
      let nowMinutes = now.getMinutes();
      let nowSeconds = now.getSeconds();
      let hoursDeg = 270 + now.getHours() * 30;
      let MinDeg = 270 + now.getMinutes() * 6;
      let SecDeg = 270 + now.getSeconds() * 6;
      return {
        hours: nowhours,
        minutes: nowMinutes,
        seconds: nowSeconds,
        hoursDegrees: hoursDeg,
        minDegrees: MinDeg,
        secDegrees: SecDeg,
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

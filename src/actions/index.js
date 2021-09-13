export const UPDATE_TIME = "SET_TIME";

export const updateTime = () => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_TIME, payload: new Date() });
  };
};

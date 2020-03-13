const INIAL_STATE = {};
export default (state = INIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

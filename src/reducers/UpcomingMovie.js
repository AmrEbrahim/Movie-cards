import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_UPCOMING":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_UPCOMING_MOVIE":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

import _ from "lodash";
const INIAL_STATE = {};
export default (state = INIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_UPCOMING":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_SEARCH":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_MOVIE":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

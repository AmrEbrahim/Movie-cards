export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_VIEDOS":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

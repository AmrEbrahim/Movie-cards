// import _ from "lodash";
const INIAL_STATE = [];
export default (state = INIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
        case 'CLEAR_MOVIES':
            return [...action.payload];
        default:
            return state;
    }
};

import { combineReducers } from "redux";
import Movies from "./Movies";
import Images from "./images";
import Videos from "./videos";
import Search from "./SearchReducer";
import UpcomingMovie from "./UpcomingMovie";

export default combineReducers({
  getMovies: Movies,
  getImages: Images,
  getVideos: Videos,
  getSearch: Search,
  getUpcoming: UpcomingMovie
});

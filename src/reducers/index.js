import { combineReducers } from "redux";
import Movies from "./Movies";
import Images from "./images";
import Videos from "./videos";

export default combineReducers({
  getMovies: Movies,
  getImages: Images,
  getVideos: Videos
});

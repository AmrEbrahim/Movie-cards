import { combineReducers } from "redux";
import moviesList from "./Movies";
import images from "./images";
import videos from "./videos";
import movies from "./movie";


export default combineReducers({
  moviesList,
  movies,
  images,
  videos
});

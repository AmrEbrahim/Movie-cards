import { combineReducers } from "redux";
import moviesList from "./movies-list";
import movies from "./movie";
import images from "./images";
import videos from "./videos";

export default combineReducers({
  moviesList,
  images,
  videos,
  movies
});

import { combineReducers } from "redux";
import moviesList from "./Movies";
import images from "./images";
import videos from "./videos";
import movies from "./movie";

// export default combineReducers({
//   getMovies: Movies,
//   getImages: Images,
//   getVideos: Videos,
//   getSearch: Search,
//   getUpcoming: UpcomingMovie
// });

export default combineReducers({
  moviesList,
  movies,
  images,
  videos
});

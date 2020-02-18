import Moviedb from "../api/themoviedb";
const KEY = "6927c1ab550d3f2a3d3a6c00289d3daf";

export const fetchMovies = () => async dispatch => {
  const response = await Moviedb.get(`/popular?api_key=${KEY}`);
  console.log(response.data.results);
  dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
};

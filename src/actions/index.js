import Moviedb from "../api/themoviedb";
const KEY = "6927c1ab550d3f2a3d3a6c00289d3daf";

export const clearMovies = () => async (dispatch) => {
  dispatch({ type: "CLEAR_MOVIES", payload: [] });
};

export const fetchMovies = () => async (dispatch) => {
  const response = await Moviedb.get(`/trending/movie/week?api_key=${KEY}`);
  // console.log(response.data.results);
  dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await Moviedb.get(`movie/${id}?api_key=${KEY}`);
  dispatch({ type: "FETCH_MOVIE", payload: response.data });
  // console.log(response.data);
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  const response = await Moviedb.get(`/movie/top_rated?api_key=${KEY}`);
  // console.log(response.data.results);
  dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
};

export const fetchTopRatedMovie = (id) => async (dispatch) => {
  const response = await Moviedb.get(`movie/${id}?api_key=${KEY}`);
  dispatch({ type: "FETCH_MOVIE", payload: response.data });
  // console.log(response.data);
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  const response = await Moviedb.get(`/movie/upcoming?api_key=${KEY}`);
  // console.log(response.data.results);
  dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
};

export const fetchUpcomingMovie = (id) => async (dispatch) => {
  const response = await Moviedb.get(`movie/${id}?api_key=${KEY}`);
  dispatch({ type: "FETCH_MOVIE", payload: response.data });
  // console.log(response.data);
};

export const fetchSearch = (id) => async (dispatch) => {
  const response = await Moviedb.get(
    `/search/movie?api_key=${KEY}&query=${id}`
  );
  dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
  // console.log(response.data.results);
};

export const fetchSearchMovie = (id) => async (dispatch) => {
  const response = await Moviedb.get(`movie/${id}?api_key=${KEY}`);
  dispatch({ type: "FETCH_MOVIE", payload: response.data });
  // console.log(response.data);
};

export const fetchImages = (id) => async (dispatch) => {
  const response = await Moviedb.get(`movie/${id}/images?api_key=${KEY}`);
  dispatch({ type: "FETCH_IMAGES", payload: response.data });
  // console.log(response.data);
};

export const fetchVideos = (id) => async (dispatch) => {
  const response = await Moviedb.get(`movie/${id}/videos?api_key=${KEY}`);
  dispatch({ type: "FETCH_VIEDOS", payload: response.data });
  // console.log(response.data);
};

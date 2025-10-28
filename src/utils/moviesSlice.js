import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    topRatedSeries: null,
    onTheAirSeries: null,
    trailerVideo: null,
    movieLogo: null,
  },
  reducers: {
    addNowPlayinyMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addOnTheAirSeries: (state, action) => {
      state.onTheAirSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieLogo: (state, action) => {
      state.movieLogo = action.payload;
    },
  },
});

export const {
  addNowPlayinyMovies,
  addTrailerVideo,
  addMovieLogo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTopRatedSeries,
  addOnTheAirSeries,
} = moviesSlice.actions;
export default moviesSlice.reducer;

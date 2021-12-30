import { createSelector } from "reselect";
import { RootState } from "../redux/reduxReducer";

const selectMainState = (state: RootState) => state.main;

const selectMoviesList = createSelector(
    selectMainState,
    select => select.movies
)

const selectMovieDetail = createSelector(
    selectMainState,
    select => select.moviesDetail
)

const selectFavoriteList = createSelector(
    selectMainState,
    select => select.favoritesMovies
)
const selectFavoriteItems = createSelector(
    selectFavoriteList,
    select => select.map(items => items.imdbID))

export {
    selectMoviesList,
    selectMovieDetail,
    selectFavoriteList,
    selectFavoriteItems
}

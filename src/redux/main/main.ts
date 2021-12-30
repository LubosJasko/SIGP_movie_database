import {MainState, ActionSet, MainEnumTypes} from "./mainTypes";

export const initialMainState: MainState = {
    movies: [],
    moviesDetail: null,
    favoritesMovies: [],
};

const main = (state = initialMainState, actions: ActionSet): MainState => {
    switch (actions.type) {
        case MainEnumTypes.SET_MOVIES: {
            return {...state, movies: actions.payload}
        }
        case MainEnumTypes.SET_MOVIES_DETAIL: {
            return {...state, moviesDetail: actions.payload}
        }
        case MainEnumTypes.SET_FAVORITE_MOVIES: {
            return <MainState>{
                ...state,
                favoritesMovies: [...new Set([...state.favoritesMovies, ...[actions.payload]])]
            }
        }
        case MainEnumTypes.REMOVE_FAVORITE_MOVIES: {
            return { ...state, favoritesMovies: state.favoritesMovies.filter(item => item.imdbID !== actions.payload)}
        }
        default:
            return {...state};
    }
};

export default main;

import {FavoriteList, MainEnumTypes} from "../redux/main/mainTypes";

interface GetMovieRequestActionCreator {
    type: MainEnumTypes.SET_MOVIES_REQUEST,
    title: string
}

export const getMovieRequestActionCreator = (title:string) :GetMovieRequestActionCreator => {
    return {
        type: MainEnumTypes.SET_MOVIES_REQUEST,
        title,
    };
}

interface GetMovieDetailRequestCreator  {
    type: MainEnumTypes.SET_MOVIES_DETAIL_REQUEST,
    id: string
}

export const getMovieDetailRequestCreator = (id: string) :GetMovieDetailRequestCreator => {
    return {
        type: MainEnumTypes.SET_MOVIES_DETAIL_REQUEST,
        id
    }
}

interface RemoveFavoriteMovieRequestCreator  {
    type: MainEnumTypes.REMOVE_FAVORITE_MOVIE_REQUEST,
    id: string
}

export const removeFavoriteMovieRequestCreator = (id: string) :RemoveFavoriteMovieRequestCreator => {
    return {
        type: MainEnumTypes.REMOVE_FAVORITE_MOVIE_REQUEST,
        id,
    }
}

interface SetFavoriteMovieRequestCreator  {
    type: MainEnumTypes.SET_FAVORITE_MOVIE_REQUEST,
    payload: FavoriteList
}

export const setFavoriteMovieRequestCreator = (payload: FavoriteList) :SetFavoriteMovieRequestCreator => {
    return {
        type: MainEnumTypes.SET_FAVORITE_MOVIE_REQUEST,
        payload
    }
}

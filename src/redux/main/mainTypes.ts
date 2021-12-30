export enum MainEnumTypes {
    SET_MOVIES_DETAIL = 'SET_MOVIES_DETAIL',
    SET_MOVIES = 'SET_MOVIES',
    SET_FAVORITE_MOVIES = 'SET_FAVORITE_MOVIES',
    REMOVE_FAVORITE_MOVIES = "REMOVE_FAVORITE_MOVIES",
    SET_MOVIES_REQUEST = 'SET_MOVIES_REQUEST',
    SET_MOVIES_DETAIL_REQUEST = 'SET_MOVIES_DETAIL_REQUEST',
    REMOVE_FAVORITE_MOVIE_REQUEST = 'REMOVE_FAVORITE_MOVIE_REQUEST',
    SET_FAVORITE_MOVIE_REQUEST = 'SET_FAVORITE_MOVIE_REQUEST',
}

export type ActionSet = MovieDetailAction | MovieAction | FavoriteMovieAction | FavoriteMovieActionRemove

type MovieDetailAction = {
    readonly type: MainEnumTypes.SET_MOVIES_DETAIL;
    readonly payload: DetailRootObject | null
}

type MovieAction = {
    readonly type: MainEnumTypes.SET_MOVIES;
    readonly payload: readonly MovieList[]
}

type FavoriteMovieAction = {
    readonly type: MainEnumTypes.SET_FAVORITE_MOVIES;
    readonly payload: FavoriteList[]
}

type FavoriteMovieActionRemove = {
    readonly type: MainEnumTypes.REMOVE_FAVORITE_MOVIES;
    readonly payload: string}

export interface MovieList {
    readonly Title: string;
    readonly Year: string;
    readonly imdbID: string;
    readonly Type: string;
    readonly Poster: string;
}

export interface FavoriteList {
    readonly Title: string;
    readonly Year: string;
    readonly imdbID: string;
}

export interface MoviesAxiosResponse {
    readonly Search: readonly MovieList[];
    readonly totalResults: string;
    readonly Response: string;
}

export interface MainState {
    readonly movies: readonly MovieList[]
    readonly moviesDetail: DetailRootObject | null
    readonly favoritesMovies:  FavoriteList[]
}

export interface Rating {
    Source: string;
    Value: string;
}

export interface DetailRootObject {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}


import {takeLatest, put, call, all, takeEvery} from 'redux-saga/effects'
import axios, {AxiosResponse} from "axios";
import {
    DetailRootObject,
    FavoriteList,
    MainEnumTypes,
    MoviesAxiosResponse,
} from "../redux/main/mainTypes";

export function* watchFetchMovie() {
    yield takeLatest(MainEnumTypes.SET_MOVIES_REQUEST, fetchMovies)
}

export function* watchFetchMovieDetail() {
    yield takeEvery(MainEnumTypes.SET_MOVIES_DETAIL_REQUEST, fetchMovieDetail)
}

function* watchFavoriteMovie() {
    yield takeEvery(MainEnumTypes.SET_FAVORITE_MOVIE_REQUEST, addFavoriteMovie)
}

function* watchFavoriteMovieRemove() {
    yield takeEvery(MainEnumTypes.REMOVE_FAVORITE_MOVIE_REQUEST, removeFavoriteMovie)
}

const getMovies = (title: string) =>
    axios.get(`http://omdbapi.com/?apikey=5e02395e&s=${title}`)

const getMoviesDetail = (imdbID: string) =>
    axios.get(`http://omdbapi.com/?apikey=5e02395e&i=${imdbID}`)

export const fetchMovieSuccess = (payload: MoviesAxiosResponse) => ({
    type: MainEnumTypes.SET_MOVIES,
    payload: payload.Search
})

export const fetchMovieDetailSuccess = (payload: DetailRootObject) => ({
    type: MainEnumTypes.SET_MOVIES_DETAIL,
    payload: payload
})

export const fetchMovieError = () => ({
    type: MainEnumTypes.SET_MOVIES,
    payload: []
})

const fetchMovieDetailError = () => ({
    type: MainEnumTypes.SET_MOVIES_DETAIL,
    payload: null
})

type MovieProps = {
    readonly title: string,
    type: string
}

export function* fetchMovies({title}: MovieProps) {
    try {
        const response: AxiosResponse<MoviesAxiosResponse> = yield call(() => getMovies(title));
        yield put(fetchMovieSuccess(response.data))
    } catch (e) {
        yield put(fetchMovieError())
        console.log(e)
    }
}

type MovieDetailProps = {
    readonly id: string,
    type: string
}

function* fetchMovieDetail({id}: MovieDetailProps) {
    try {
        const response: AxiosResponse<DetailRootObject> = yield call(() => getMoviesDetail(id));
        yield put(fetchMovieDetailSuccess(response.data))
    } catch (e) {
        yield put(fetchMovieDetailError())
        console.log(e)
    }
}

type Params = {
    readonly payload: FavoriteList,
    type: string
}

export function* addFavoriteMovie({payload}: Params) {
    yield put({
        type: MainEnumTypes.SET_FAVORITE_MOVIES,
        payload,
    })
}

type ImdbID = {
    readonly id: string,
    type: string
}

function* removeFavoriteMovie({id}: ImdbID) {
    yield put({
        type: MainEnumTypes.REMOVE_FAVORITE_MOVIES,
        payload: id,
    })
}

export default function* rootSaga() {
    yield all([
        call(watchFetchMovie),
        call(watchFetchMovieDetail),
        call(watchFavoriteMovie),
        call(watchFavoriteMovieRemove)
    ]);
}

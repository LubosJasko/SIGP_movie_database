import {MoviesAxiosResponse} from "../../../redux/main/mainTypes";

const MovieMockData: MoviesAxiosResponse = {
    Response: "True",
    Search: [{
        Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        Title: "The Matrix",
        Type: "movie",
        Year: "1999",
        imdbID: "tt0133093"
    }],
    totalResults: "128",

}

export default MovieMockData;

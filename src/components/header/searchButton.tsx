import { Input } from 'antd';
import {FC, useCallback} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {getMovieRequestActionCreator} from "../actions";

const { Search } = Input;

const SearchButton:FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSearch = useCallback((title: string) => {
        dispatch(getMovieRequestActionCreator(title))
        navigate('/')
    }, [dispatch, navigate])

    return (
            <Search
                placeholder="Search for movie"
                allowClear
                onSearch={handleSearch}
                style={{ width: 250 }}
            />
    )
}

export default SearchButton




import {Table} from 'antd';
import {FC} from "react";
import {useSelector} from "react-redux";

import styled from "styled-components";
import {Link} from "react-router-dom";
import {MovieList} from "../../../redux/main/mainTypes";
import {selectMoviesList} from "../../../selectors/rootSelector";

const Poster = styled.img`
  height: 5rem;
`

const columns = [
    {
        title: 'Poster',
        key: 'Poster',
        render: (url: MovieList) => <Poster src={url.Poster}/>
    },
    {
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        render: (text: string, row: MovieList) => <Link state={true} to={{pathname: `detail/${row.imdbID}` }}>{text}</Link>,
    },
    {
        title: 'Year',
        dataIndex: 'Year',
        key: 'Year',
    },
    {
        title: 'imdbID',
        dataIndex: 'imdbID',
        key: 'imdbID',
    },
    {
        title: 'Type',
        key: 'Type',
        dataIndex: 'Type',
    },
];

const MovieSearch: FC = () => {

    const movieData = useSelector(selectMoviesList)

    return (
        <Table columns={columns} dataSource={movieData} pagination={{defaultPageSize: 5}}/>
    )
}
export default MovieSearch

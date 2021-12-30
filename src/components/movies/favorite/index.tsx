import {FC} from "react";
import {Table} from "antd";
import {FavoriteList} from "../../../redux/main/mainTypes";
import {useSelector} from "react-redux";
import {selectFavoriteList} from "../../../selectors/rootSelector";
import {Link} from "react-router-dom";

const columns = [
    {
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        render: (text: string, row: FavoriteList) => <Link to={`/detail/${row.imdbID}`}>{text}</Link>

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
    }
];

const Favorite:FC = () => {

    const favoriteList = useSelector(selectFavoriteList)
    return (
        <Table columns={columns} dataSource={favoriteList} pagination={{defaultPageSize: 5}} />
    )
}

export default Favorite;

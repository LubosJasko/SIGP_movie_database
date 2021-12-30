import React, {FC} from "react";
import {Routes, Route} from "react-router-dom";

import Detail from "./components/movies/detail";
import Favorite from "./components/movies/favorite";
import MovieSearch from "./components/movies/search";

const MenuRoutes:FC = () => {

    return (
        <Routes>
            <Route index element={<MovieSearch/>} />
            <Route path="detail/:id" element={ <Detail/>} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="*" element={<MovieSearch />}/>
        </Routes>
    )
}

export default MenuRoutes;

import React, {FC} from "react";
import {HolderOutlined, StarOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Menu} from "antd";

const SiderMenu: FC = () => {

    return(
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HolderOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<StarOutlined/>}>
                <Link to='/favorite'>Favorites</Link>
            </Menu.Item>
        </Menu>
    )
}

export default SiderMenu;

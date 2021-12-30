import React, {FC} from "react";
import {Layout} from "antd";
import SiderMenu from "./siderMenu";

const {Sider} = Layout;

const SliderComponent: FC = () => {

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo"/>
            <SiderMenu/>
        </Sider>
    )
}

export default SliderComponent

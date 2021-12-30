import React, {FC} from "react";
import {Layout} from "antd";
import HeaderComponent from "../header";
import MenuRoutes from "../../routes";

const {Header, Content, Footer} = Layout;

const LayoutComponent:FC = () => {

    return (
        <Layout>
            <Header className="site-layout-sub-header-background" style={{padding: 0}}>
                <HeaderComponent/>
            </Header>

            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    <MenuRoutes />
                </div>
            </Content>

            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default LayoutComponent

import React, {FC} from "react";
import {Layout} from "antd";
import styled from "styled-components";
import SliderComponent from "./components/slider";
import LayoutComponent from "./components/layout";

const StyledLayout = styled(Layout)`
  height: 100vh;

  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
    overflow: scroll;
    height: 100%;
  }
`

const App: FC = () => {
    return (
        <StyledLayout>
            <SliderComponent/>
            <LayoutComponent/>
        </StyledLayout>
    );
}

export default App

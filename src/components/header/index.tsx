import React, {FC} from "react";
import SearchButton from "./searchButton";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  padding-right: 1rem;
  height: 100%;
`

const HeaderComponent: FC = () => {

    return (
        <HeaderWrapper>
            <SearchButton/>
        </HeaderWrapper>
    )
}

export default HeaderComponent

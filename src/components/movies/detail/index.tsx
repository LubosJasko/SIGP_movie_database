import React, {FC, useCallback, useEffect, useState} from "react";
import {Row, Col, Spin} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {selectFavoriteItems, selectMovieDetail} from "../../../selectors/rootSelector";
import styled from "styled-components";
import {StarFilled} from '@ant-design/icons';
import {useParams} from "react-router";
import {DetailRootObject} from "../../../redux/main/mainTypes";
import {
    getMovieDetailRequestCreator,
    removeFavoriteMovieRequestCreator,
    setFavoriteMovieRequestCreator
} from "../../actions";

const TitleCol = styled(Col)<{
    readonly center?: boolean
}>`
  font-weight: bold;
  display: flex;
  justify-content: ${({center}) => center ? 'center' : 'left'};
  align-items: ${({center}) => center ? 'center' : 'normal'};
`

const LeftWrapper = styled.div`
 
  .ant-col {
    width: 100%;
    justify-content: center;
    display: flex;
  }
  
  .ant-col:last-child {
    flex-direction: column;
  }
`

const StyledStarIcon = styled(StarFilled)<{
    readonly active?: boolean
}>`
  cursor: pointer;

  svg path {
    fill: ${({active}) => active ? 'gold' : 'black'};
  }
`

const Img = styled.img`
  max-width: 90%;
`

const CenterSpin = styled.div`
  display: flex;
  justify-content: center;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Detail: FC = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const selectedDetail = useSelector(selectMovieDetail)
    const favoriteList = useSelector(selectFavoriteItems)
    const {id} = params

    const [detail, setDetail] = useState<DetailRootObject | null>(null)

    useEffect(() => {
        setDetail(selectedDetail)
    },[selectedDetail, setDetail])

    useEffect(() => {
        if (id) {
            dispatch(getMovieDetailRequestCreator(id))
        }
    }, [dispatch, id])

    const handleFavorite = useCallback(() => {
        if (!detail) {
            return
        }
        const {Title, Year, imdbID} = detail

        if (favoriteList.includes(imdbID)) {
            return dispatch(removeFavoriteMovieRequestCreator(imdbID))
        } else {
            dispatch(setFavoriteMovieRequestCreator({Title, Year, imdbID}))
        }

    }, [detail, favoriteList, dispatch])

    if (!detail || !id || selectedDetail?.imdbID !== id) {
        return (<CenterSpin>
            <Spin size="large" tip={"...loading"}/>
        </CenterSpin>)
    }

    const {Poster, Ratings, Title, ...detailInfo} = detail
    const activeStar = favoriteList.includes(detailInfo.imdbID)

    return (
        <Row>
            <Col span={8}>
                {detail && (
                    <LeftWrapper>
                        <TitleCol center>
                            {Title}
                            <StyledStarIcon onClick={handleFavorite} active={activeStar}/>
                        </TitleCol>
                        <Col>
                            <Img src={Poster} alt={Poster}/>
                        </Col>
                        <Col>
                            <Center>Ratings</Center>
                            {Ratings.map(item =>
                                (<Row key={item.Source}>
                                    <TitleCol flex="65%">{item.Source}:</TitleCol>
                                    <Col flex="35%">{item.Value}</Col>
                                </Row>)
                            )}
                        </Col>
                    </LeftWrapper>
                )}
            </Col>
            <Col span={16}>
                {detailInfo && Object.entries(detailInfo).map(([key, value]) =>
                    (<Row>
                        <TitleCol flex="25%">{key}:</TitleCol>
                        <Col flex="75%">{value}</Col>
                    </Row>)
                )}
            </Col>
        </Row>
    )
}

export default Detail

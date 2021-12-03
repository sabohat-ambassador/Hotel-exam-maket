import Subscribe from "../components/Subscribe"
import ReactStars from "react-rating-stars-component";
import React from "react";
import styled from 'styled-components'
import {Navigate, useNavigate } from "react-router-dom";
import { Container } from "../styled";
import {useTranslation} from 'react-i18next'
import HotelPhotos from '../components/HotelPhotos'
import ExclusiveRooms from "../components/Exclusive";
import PriceCard from '../components/PriceCard'


const DetailsSection = styled.section`
background:${(props) => props.theme.hotelsbgcolor};
`
const Pages = styled.div`
display: flex;
padding-top: 40px;
`

const CountryHotels = styled.h1`
font-size: 48px;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.hotelNameColor};
margin-bottom: 5px;
`
const HomePage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.homePageColor};
margin-right: 5px;
border: none; 
background: transparent;
`
const RideIcon = styled.i`
color: ${(props) => props.theme.homePageColor};
font-size: 10px;

`
const HotelListPage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.homePageColor};
margin-right: 5px;
border: none; 
background: transparent;
`

const HotelDetailsPage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:#B1B5C3;
border: none; 
background: transparent;
`
const Row = styled.div`
display: flex;
`
const MainDetail = styled.div`
display: flex;
align-items: start;
justify-content: space-between;
`
const Location = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color:${(props) => props.theme.exploreColor};
margin-right: 19px;
margin-bottom: 0;
margin-top: 0;
`
const LocationIcon = styled.i`
color: #84878B;
font-size: 16px;
margin-left: 25px;
margin-right: 12px;
`

const Reviews = styled.div`
display: flex;
align-items: center;
`
const Star = styled.img`
margin-right: 8px;
`
const Review = styled.span`
color: #3B3E44;
font-size: 14px;
font-weight: 500;
line-height: 21px;
`
const SpanRew = styled.span`
color: #84878B
`
const Reytings = styled.div`
display: flex;
margin-top: 40px;
`

const Span1 = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.spanColor1};
background: ${(props) => props.theme.span1Color};
padding: 5px 8px;
border-radius: 5px;
margin-right: 17px;
`
const Span2 = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.spanColor2};
background:${(props) => props.theme.span2Color};
border-radius: 5px;
padding: 5px 9px;
margin-right: 17px;
`
const Span3 = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.spanColor3};
background: ${(props) => props.theme.span3Color};
border-radius: 5px;
padding: 5px 15px;
margin-right: 17px;
`
const Span4 = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:${(props) => props.theme.spanColor4};
background:${(props) => props.theme.span4Color};
border-radius: 5px;
padding: 5px 20px;
margin-right: 17px;
`
const Span5 = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.spanColor5};
background: ${(props) => props.theme.span5Color};
border-radius: 5px;
padding: 5px 18px;
margin-right: 17px;
`
const HotelDetails = ()=>{
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/')
      }
      const hundleSubmit2 = (el)=>{
        el.preventDefault()
        History('/hotels')
      }
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const {t} = useTranslation();
    return(
      <DetailsSection>

        <Container>
              <Pages>
                <HomePage onClick={hundleSubmit}>Home <RideIcon className='icon-rightside'/></HomePage>
                <HotelListPage onClick={hundleSubmit2}>Hotel list <RideIcon className='icon-rightside'/></HotelListPage>
                <HotelDetailsPage>Hotel details </HotelDetailsPage>
            </Pages>
            <CountryHotels>Switzerland Hotels and Places to Stay </CountryHotels>
            <Row>
            <Reviews><Star src='/assets/star.png'/><Review>4.8 <SpanRew>(122 {t('reviews')})</SpanRew></Review></Reviews>
            <Location><LocationIcon className='icon-location'/>{t('countryName')}</Location>
            </Row>
            <HotelPhotos/>
            <Reytings>
              <Span1>5.0</Span1>
              <Span2>Perfect</Span2>
              <Span3>Hotels</Span3>
              <Span4>Building</Span4>
              <Span5>Top value</Span5>
              <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
            </Reytings>
            <MainDetail>
              <ExclusiveRooms/>
              <PriceCard/>
            </MainDetail>
            <Subscribe/>
        </Container>
      </DetailsSection>
    )
}

export default HotelDetails
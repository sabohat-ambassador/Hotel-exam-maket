import {useTranslation} from 'react-i18next'
import { Container, Theme , Calm, BtnSlider} from "../styled"
import {useState, useEffect} from 'react'
import styled, { ThemeContext } from 'styled-components';
import React, { Component } from 'react';
import apiCalls from '../config/api';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'

const TopSectionText = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`

const TopCountryTour = styled.section`
margin-top:70px;
`


const TopCards = styled.div`
display:flex;

`

const TopTourCard = styled.div`
position: relative;
margin-top:61px;
`

const TopImg = styled.img`
height: 495px;
width: 369px;
border-radius: 16px;
border-radius: 16px;
`

const CountryName = styled.div`
background: rgba(20, 20, 22, 0.2);
padding:12px 27px;
position: absolute;
top:30px;
left: 35px;
color: #E9EBF3;
font-size: 20px;
font-weight: 700;
line-height: 26px;
letter-spacing: 0em;
border-radius: 50px;
`

const CountryBottom = styled.p`
font-size: 34px;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
color: #FCFCFD;
position: absolute;
bottom:66px;
left: 35px;
margin-bottom:0;
`

const PupularPlaces = styled.span`
font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
color: #FCFCFD;
position: absolute;
bottom:34px;
left: 35px;
color: #FCFCFD;
margin-top:8px;
`



const TopTour = ()=>{
    const {t} = useTranslation();

   
    const [tourList, setTourList] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {

        const getTours = async () => {
          try {
              const data = await apiCalls.getTours();
              setTourList(data);
          } catch (error) {
              setError(error.message);
          }
         
        }
        getTours();
      },[]);

   const mappedTour = tourList.map( el => (
    
    <SwiperSlide>
   <TopTourCard >
           <TopImg src={el.photo}></TopImg>
                    <CountryName>{el.name}</CountryName>
                    <CountryBottom>{el.country}</CountryBottom>
                    <PupularPlaces>{el.place_count}  Popular Places</PupularPlaces>
      </TopTourCard>
      </SwiperSlide>
   ))
   SwiperCore.use([Navigation]);
    return(
        <Container>
            <TopCountryTour>

            <TopSectionText>
                <div>
                    <Theme>{t('topTour')}</Theme>
                    <Calm>{t('calm')}</Calm>
                </div>
                <div>
               <BtnSlider className='swiper-prev'><i className='icon-leftside'></i></BtnSlider> 
               <BtnSlider className='swiper-next' ><i className='icon-rightside'></i></BtnSlider> 
            </div>
            </TopSectionText>
            <Swiper spaceBetween={30}  slidesPerView={3}loop modules= {{Navigation}}
        
        navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        }}
            >
        <TopCards>
                {error ? error : mappedTour}
            </TopCards>
            </Swiper>
            
            

            
            </TopCountryTour>
        </Container>
    )
            }

export default TopTour



import {useTranslation} from 'react-i18next'
import { Container, Theme , Calm} from "../styled"
import {useState} from 'react'
import styled, { ThemeContext } from 'styled-components';
import React, { Component } from 'react';
import Slider from 'react-slick';

const TopSectionText = styled.div`
display:flex;
`

const TopCountryTour = styled.section`
margin-top:70px;
`


const TopCards = styled.div`
display:flex;
justify-content: space-between;
margin-top:61px;
`

const TopTourCard = styled.div`
position:relative;
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
const BtnSlider = styled.button`
height: 36px;
width: 36px;
border-radius: 50%;
background: #F4F5F6;
`



const TopTour = ()=>{
    const {t} = useTranslation();
    // const [slider, setSlider] = useState(1)

    // const NextSlide = ()=>{
    //     if(slider!== Datajson.length){
    //         setSlider(slider + 1)
    //     }else if (slider=== Datajson.length){
    //         setSlider(1)
    //     }
    // }

    // const PrevSlide = ()=>{
    //     if(slider !== 1){
    //         setSlider(slider-1)
    //     }else if(slider === 1){
    //         setSlider(Datajson.length)
    //     }
    // }
    
     
    return(
        <Container>
            <TopCountryTour>

            <TopSectionText>
                <div>
                    <Theme>{t('topTour')}</Theme>
                    <Calm>{t('calm')}</Calm>
                </div>
                <div>
               {/* <BtnSlider moveslide={PrevSlide} direction={'prev'}><i className='icon-leftside'></i></BtnSlider> 
               <BtnSlider moveslide={NextSlide} direction={'next'}><i className='icon-rightside'></i></BtnSlider>  */}
            </div>
            </TopSectionText>
            <TopCards>
                <TopTourCard>
                    <TopImg src='/assets/cassie.jpg'></TopImg>
                    <CountryName>Japan</CountryName>
                    <CountryBottom>Japan</CountryBottom>
                    <PupularPlaces>10 Popular Places</PupularPlaces>
                </TopTourCard>
                <TopTourCard>
                    <TopImg src='/assets/cassie.jpg'></TopImg>
                    <CountryName>Japan</CountryName>
                    <CountryBottom>Japan</CountryBottom>
                    <PupularPlaces>10 Popular Places</PupularPlaces>
                </TopTourCard>
                <TopTourCard>
                    <TopImg src='/assets/cassie.jpg'></TopImg>
                    <CountryName>Japan</CountryName>
                    <CountryBottom>Japan</CountryBottom>
                    <PupularPlaces>10 Popular Places</PupularPlaces>
                </TopTourCard>
            </TopCards>

            
            </TopCountryTour>
        </Container>
    )
            }

export default TopTour



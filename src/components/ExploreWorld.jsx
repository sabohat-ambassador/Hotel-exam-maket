import { Container, Theme, ExplorePlace, ExploreBox , ComfortTheme} from "../styled"
import {useTranslation} from 'react-i18next'
import styled, { ThemeContext } from 'styled-components';


const Explore = styled.section`
margin-top:70px;
margin-bottom: 70px;
`

const ExploreCards = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ExploreText = styled.div`
margin-bottom:50px;
`

const ComfortImg = styled.img`
border-radius: 16px;
transform: matrix(-1, 0, 0, 1, 0, 0);
`

const Reviews = styled.div`
display: flex;
align-items: center;
`

const Star = styled.img`
margin-right: 8px;
`

const Number = styled.p`
font-weight: 500;
font-size: 14px;
color: #3B3E44;
margin-top:10px;
`
const Span = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`

const ComfortSpace = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 12px;
`

const Price = styled.span`
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #316BFF;
padding: 3px 10px;
background: rgba(49, 107, 255, 0.2);
border-radius: 6px
`

const Distance = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`

const Location = styled.p`
font-size: 14px;
line-height: 21px;
color: #84878B;
`

const IconLoc = styled.i`
color:#B1B5C3;
font-size: 15px;
`

const Rooms = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #84878B;
`
const IconRoom  = styled.i`
color:#B1B5C3;
font-size: 15px;
`
const ExploreWorld = ()=>{
    const {t} = useTranslation();
    return(
        <Container>
            <Explore>
                <ExploreText>
                    <Theme>{t('explore')}</Theme>
                    <ExplorePlace>{t('explorePlace')}</ExplorePlace>
                </ExploreText>
                <ExploreCards>
                    <ExploreBox>
                        <ComfortImg src='/assets/comfort.jpg'></ComfortImg>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <ComfortSpace>
                            <ComfortTheme>Comfort Space</ComfortTheme>
                            <Price>$210</Price>
                        </ComfortSpace>
                        <Distance>1.2 km to Town Center</Distance>
                       <Location> <IconLoc className='icon-location'></IconLoc> Turkey, Mamaris</Location> 
                       <Rooms> <IconRoom className='icon-apartment'> </IconRoom>Rooms available: 375 </Rooms>
                    </ExploreBox>
                    <ExploreBox>
                        <ComfortImg src='/assets/comfort.jpg'></ComfortImg>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <ComfortSpace>
                            <ComfortTheme>Comfort Space</ComfortTheme>
                            <Price>$210</Price>
                        </ComfortSpace>
                        <Distance>1.2 km to Town Center</Distance>
                       <Location> <IconLoc className='icon-location'></IconLoc> Turkey, Mamaris</Location> 
                       <Rooms> <IconRoom className='icon-apartment'> </IconRoom>Rooms available: 375 </Rooms>
                    </ExploreBox>
                    <ExploreBox>
                        <ComfortImg src='/assets/comfort.jpg'></ComfortImg>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <ComfortSpace>
                            <ComfortTheme>Comfort Space</ComfortTheme>
                            <Price>$210</Price>
                        </ComfortSpace>
                        <Distance>1.2 km to Town Center</Distance>
                       <Location> <IconLoc className='icon-location'></IconLoc> Turkey, Mamaris</Location> 
                       <Rooms> <IconRoom className='icon-apartment'> </IconRoom>Rooms available: 375 </Rooms>
                    </ExploreBox>
                    <ExploreBox>
                        <ComfortImg src='/assets/comfort.jpg'></ComfortImg>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <ComfortSpace>
                            <ComfortTheme>Comfort Space</ComfortTheme>
                            <Price>$210</Price>
                        </ComfortSpace>
                        <Distance>1.2 km to Town Center</Distance>
                       <Location> <IconLoc className='icon-location'></IconLoc> Turkey, Mamaris</Location> 
                       <Rooms> <IconRoom className='icon-apartment'> </IconRoom>Rooms available: 375 </Rooms>
                    </ExploreBox>
                </ExploreCards>
            </Explore>
        </Container>
    )
}

export default ExploreWorld
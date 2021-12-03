import { useTranslation } from 'react-i18next';
import styled, { ThemeContext } from 'styled-components';
import {TrendingSection, TrendingBox, TrendingPlace} from '../styled'


const TrendingTopText = styled.div`
text-align: center;
padding-top: 60px;
`
const TrendingTheme = styled.h3`
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
margin:0;
color: ${(props) => props.theme.placeNameColor};
`
const TrendingText = styled.p`
font-size: 24px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
color: ${(props) => props.theme.trendingTextcolor};
`

const TrendingCards =  styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
max-width: 1160px;
margin: 50px auto;
`

const TrendImg = styled.img`
border-radius: 16px;
height: 160px;
width: 167px;
`

const TrendingAbout = styled.div`
margin-left:25px;
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
color: ${(props) => props.theme.numbercolor};
margin-bottom: 1px;

`
const Span = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.spanColorTrending};
`

const Price = styled.p`
font-family: Poppins;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
color: ${(props) => props.theme.priceColor};
margin-top: 18px;
`
const BookNow = styled.button`
background: #316BFF;
border-radius: 6px;
font-weight: bold;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
padding: 8px 16px;
border:none;
`


const TrendingCites = ()=>{
    const {t}=  useTranslation()
    return(
        <TrendingSection>
            <TrendingTopText>
                <TrendingTheme>{t('trendingTheme')}</TrendingTheme>
                <TrendingText>{t('trendingText')}</TrendingText>
            </TrendingTopText>
            <TrendingCards>
                <TrendingBox>
                      <TrendImg src='/assets/manila.jpg'></TrendImg>
                    <TrendingAbout>
                        <TrendingPlace>Manila</TrendingPlace>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <Price>$250.00<Span>/night</Span></Price>
                        <BookNow>Book Now</BookNow>
                    </TrendingAbout>
                </TrendingBox>
                <TrendingBox>
                      <TrendImg src='/assets/manila.jpg'></TrendImg>
                    <TrendingAbout>
                        <TrendingPlace>Manila</TrendingPlace>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <Price>$250.00<Span>/night</Span></Price>
                        <BookNow>Book Now</BookNow>
                    </TrendingAbout>
                </TrendingBox>
                <TrendingBox>
                      <TrendImg src='/assets/manila.jpg'></TrendImg>
                    <TrendingAbout>
                        <TrendingPlace>Manila</TrendingPlace>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <Price>$250.00<Span>/night</Span></Price>
                        <BookNow>Book Now</BookNow>
                    </TrendingAbout>
                </TrendingBox>
                <TrendingBox>
                      <TrendImg src='/assets/manila.jpg'></TrendImg>
                    <TrendingAbout>
                        <TrendingPlace>Manila</TrendingPlace>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <Price>$250.00<Span>/night</Span></Price>
                        <BookNow>Book Now</BookNow>
                    </TrendingAbout>
                </TrendingBox>
                <TrendingBox>
                      <TrendImg src='/assets/manila.jpg'></TrendImg>
                    <TrendingAbout>
                        <TrendingPlace>Manila</TrendingPlace>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <Price>$250.00<Span>/night</Span></Price>
                        <BookNow>Book Now</BookNow>
                    </TrendingAbout>
                </TrendingBox>
                <TrendingBox>
                      <TrendImg src='/assets/manila.jpg'></TrendImg>
                    <TrendingAbout>
                        <TrendingPlace>Manila</TrendingPlace>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>4.91 <Span>(147)</Span> </Number> 
                        </Reviews>
                        <Price>$250.00<Span>/night</Span></Price>
                        <BookNow>Book Now</BookNow>
                    </TrendingAbout>
                </TrendingBox>
            </TrendingCards>
        </TrendingSection>
    )
}

export default TrendingCites;
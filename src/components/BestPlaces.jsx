import {useTranslation} from 'react-i18next'
import styled, { ThemeContext } from 'styled-components';
import { Container,  BestBg, IntroTheme, PlaceName } from '../styled';


const Card= styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 65px;
`
const Places = styled.section`
margin-top:70px;
margin-bottom: 82px;
`
const Best= styled.div`
text-align:center;
`
const IntroText = styled.p`
font-family: Poppins;
font-size: 16px;
line-height: 24px;
letter-spacing: 0em;
color: #84878B;
width: 593px;
margin: 0 auto;
`
const H1= styled.h1`
font-size: 48px;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
color: #23262F;
`
const BestCard = styled.div`
width: 210px;
border-radius: 10px;
border: 1px solid #E7ECF3;
padding: 30px;
margin-bottom: 30px;
&:hover {
     {
        background:  ${(props) => props.theme.cardHover};
        box-shadow: 0px 20px 51px 0px #6060601A;
    }
`

const Placeimg = styled.img`
height: 70px;
width: 70px;
left: 330px;
top: 249.00244140625px;
border-radius: 10px;
`

const Destinations = styled.span`
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: #84878B;

`
const BestPlaces=()=>{
    const {t} = useTranslation();
  
    return(
            <BestBg>
        <Container>

            <Places>
             <Best>
                <IntroTheme>{t('besttitle')}</IntroTheme>
                <IntroText>{t('besttext')}</IntroText>
            </Best>
            <Card>
             <BestCard>
                <Placeimg src='/assets/ahsan.png'></Placeimg>
                <PlaceName>Batu, East Java</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            <BestCard>
                <Placeimg src='/assets/kuta.jpg'></Placeimg>
                <PlaceName>Kuta</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            <BestCard>
                <Placeimg src='/assets/surabaya.jpg'></Placeimg>
                <PlaceName>Surabaya, East Java</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            <BestCard>
                <Placeimg src='/assets/malang.jpg'></Placeimg>
                <PlaceName>Malang, East Java</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            <BestCard>
                <Placeimg src='/assets/malang.jpg'></Placeimg>
                <PlaceName>Dieng, Central Java</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            <BestCard>
                <Placeimg src='/assets/nusa.jpg'></Placeimg>
                <PlaceName>Nusa Dua, Lombok</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            <BestCard>
                <Placeimg src='/assets/kuta.jpg'></Placeimg>
                <PlaceName>Bandung, West Java</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            <BestCard>
                <Placeimg src='/assets/ahsan.png'></Placeimg>
                <PlaceName>Wakatobi, Sumatera</PlaceName>
                <Destinations>86 Destinations</Destinations>
            </BestCard>
            </Card>
            </Places>
        </Container>
            </BestBg>
    )
}

export default BestPlaces
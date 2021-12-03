import {useTranslation} from 'react-i18next'
import styled from "styled-components"
import { Container } from "../styled"

const MainIntro = styled.section`
background-image: url(../../assets/bgintro.jpg);
 padding: 140px; 200px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
`
const Enjoy = styled.h1`
font-family: Poppins;
font-size: 64px;
font-weight: 700;
line-height: 80px;
letter-spacing: -0.005em;
color: #3B3E44;
max-width: 662px;
margin-bottom: 70px;
margin-top: 0;
`
const Intro=()=>{
    const {t} = useTranslation();
    return(
        <MainIntro >
            <Container>

            <Enjoy>{t('title')}</Enjoy>
            </Container>
        </MainIntro>
    )
}

export default Intro
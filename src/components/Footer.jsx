import {useTranslation} from 'react-i18next'
import styled, { ThemeContext } from 'styled-components';
import { Container, ButtonChangeSun, ButtonChangeMoon, FooterSection, TripGuide } from "../styled"
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Logo = styled.div`
display: flex;
align-items: center;
`
const FooterSides = styled.div`
display:flex;
justify-content: space-between;
padding-top: 231px;
`

const FooterText = styled.p`
font-size: 16px;
line-height: 24px;
color:${(props) => props.theme.footerText};
max-width: 254px;
margin-top:25px;
`
 const Theme = styled.h4`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: ${(props) => props.theme.footerThemecolor};
`

const Ul = styled.ul`
list-style: none;

`
const Li = styled.li`
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
color:${(props) => props.theme.footerliColor};
margin-bottom:16px;
margin-top: 18px;
`

const ButtonTheme = styled.button`
background:${(props) => props.theme.footerButtonbg};
border: 0.5px solid ${(props) => props.theme.footerButBorder};
box-sizing: border-box;
border-radius: 10px;
padding: 5px;
`
const Footer = ()=>{
    const {theme, toggleTheme} =  useContext(ThemeContext)
    const {t} = useTranslation()
    return(
        <FooterSection>
            <Container>
                <FooterSides>
                <div>
                <Link to="/">
                <Logo>
                    <img src="/assets/Subtract.png" alt="" />
                    <TripGuide>TripGuide</TripGuide>
                </Logo>
            </Link>
                    <FooterText>{t('footerText')}</FooterText>
                    <ButtonTheme>
                    <ButtonChangeSun onClick={()=> toggleTheme( 'dark' )}> <i className='icon-sun'></i></ButtonChangeSun>
                    <ButtonChangeMoon onClick={()=> toggleTheme( 'light' )}><i className='icon-moon'></i></ButtonChangeMoon>
                    </ButtonTheme>
                </div>
                <div>
                    <Ul>
                    <Theme>{t('footerTopTheme1')}</Theme>
                        <Li>{t('service1')}</Li>
                        <Li>{t('service2')} </Li>
                        <Li>{t('service3')} </Li>
                        <Li> {t('service4')}</Li>
                        <Li>{t('service5')}</Li>
                    </Ul>
                </div>
                <div>
                    <Ul>
                    <Theme>{t('footerTopTheme2')}</Theme>
                        <Li>{t('support1')}</Li>
                        <Li>{t('support2')}</Li>
                        <Li>{t('support3')}</Li>
                        <Li>{t('support4')}</Li>
                        <Li>{t('support5')}</Li>
                    </Ul>
                </div>
                <div>
                    <Ul>
                    <Theme>{t('footerTopTheme3')}</Theme>
                        <Li>{t('business1')}</Li>
                        <Li>{t('business2')}</Li>
                        <Li>{t('business3')}</Li>
                        <Li>{t('business4')}</Li>
                        <Li>{t('business5')}</Li>
                    </Ul>
                </div>
                </FooterSides>
            </Container>
        </FooterSection>
    )
}

export default Footer
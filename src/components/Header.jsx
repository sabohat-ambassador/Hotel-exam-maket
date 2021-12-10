import i18next from 'i18next';
import {useTranslation} from 'react-i18next'
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import {MainHeader, TripGuide, DropdownContents, DropdownLink,DropBtn} from '../styled'

// import { Button, Card } from '../../styled';

const Logo = styled.div`
display: flex;
align-items: center;
`
const CounterBell = styled.span`
    position: absolute;
    top: -3px;
    right: -7px;
    border-radius: 50%;
    padding: 2px 5px;
    color: #fff;
    font-weight: 500;
    font-size: 8px;
    background-color: #EB5757;
`


const Flag = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding-right: 10px;
`
const Bell = styled.div`
    position: relative;
    margin: 0 17px 0 0;
    &:after {
        content: '';
        position: absolute;
        top: -4px;
        right: -17px;
        width: 1px;
        height: 32px;
        background-color: ${(props) => props.theme.bellAfter};
    }
`
const IconBell = styled.i`
    font-size: 20px;
    color: ${(props) => props.theme.bellColor};
`

const Dropdown = styled.div`
    position: relative;
    &:hover ${DropdownContents} {
        display: block;
    }
`

const Profile = styled.button`
border: none;
font-family: Roboto;
font-size: 14px;
font-weight: 500;
line-height: 16px;
background-color: transparent;
padding: 0;
margin-left: 10px;
color: ${(props) => props.theme.profileNameColor};
`
const RightSides = styled.div`
display: flex;
align-items: center;
`
const IconBottom = styled.i`
font-size: 8px;
margin-left: 17px;
`
const IconProfile = styled.i`
color: ${(props) => props.theme.iconProfile};
font-size: 16px;
margin-right: 10px;
`


const Avatar = styled.img`
border-left: 1px solid #E7ECF3;
padding-left: 20px;
`
const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const {t} = useTranslation();
    const [lang, setLang] = useState(t('en'))
    const [ valuts, setValut] =  useState('USD')
    return (
        <MainHeader>
            <Link to="/">
                <Logo>
                    <img src="/assets/Subtract.png" alt="" />
                    <TripGuide>TripGuide</TripGuide>
                </Logo>
            </Link>

            <RightSides>
                <Dropdown>
                <DropBtn>{valuts}</DropBtn>
                <DropdownContents>
                    <DropdownLink href="#" onClick={(el) => {setValut(el.target.innerText)}}>USD</DropdownLink>
                    <DropdownLink href="#"  onClick={(el) => {setValut(el.target.innerText)}}>RUBL</DropdownLink>
                    <DropdownLink href="#"  onClick={(el) => {setValut(el.target.innerText)}}>SUM</DropdownLink>
                </DropdownContents>
                </Dropdown>
                <Dropdown>
                <DropBtn>
                    <Flag>
                        <img style={{width: '100%' }} src={`/assets/${lang}.png`} alt="" />
                    </Flag>
                </DropBtn>
                <DropdownContents>
                    <DropdownLink href="#"  onClick={() => {i18next.changeLanguage('en') && setLang('en')}}>
                        <Flag>
                            <img style={{width: '100%'}} src={`/assets/en.png`} alt="flag" />
                        </Flag> {t('lang')}
                        </DropdownLink>
                    <DropdownLink href="#"  onClick={() => {i18next.changeLanguage('ru') && setLang('ru')}}>
                        <Flag>
                            <img style={{width: '100%'}} src={`/assets/ru.png`} alt="flag" />
                        </Flag> {t('lang2')}
                        </DropdownLink>
                    <DropdownLink href="#"  onClick={() => {i18next.changeLanguage('uz') && setLang('uz')}}>
                        <Flag>
                            <img style={{width: '100%'}} src={`/assets/uz.png`} alt="flag" />
                        </Flag> {t('lang3')}
                        </DropdownLink>
                </DropdownContents>
                </Dropdown>

                <Bell>
                    <IconBell className="icon-bell"></IconBell>
                    <CounterBell>1</CounterBell>
                </Bell>
                <Avatar src="/assets/avatar.png" alt="" />
                <Dropdown>
                <Profile>Delowar<IconBottom className="icon-Rectangle"></IconBottom></Profile>
                <DropdownContents>
                    <DropdownLink href="#" > <IconProfile className='icon-user'></IconProfile> {t('profile')}</DropdownLink>
                    <DropdownLink href="#" > <IconProfile className='icon-sign'></IconProfile>{t('sign')}</DropdownLink>
                </DropdownContents>
                </Dropdown>
            </RightSides>
        </MainHeader>
    );
}

export default Header;

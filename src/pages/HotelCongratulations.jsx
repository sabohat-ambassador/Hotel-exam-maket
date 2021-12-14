
import {Link, Navigate, useNavigate } from "react-router-dom";
import { Container } from "../styled"
import {useTranslation} from 'react-i18next'
import styled from "styled-components"
import Subscribe from "../components/Subscribe";
import Congratulation from '../components/Congratulation'
import { BiLink } from "react-icons/bi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import apiCalls from '../config/api';

const HotelCongratulationBg = styled.div`
background:  ${(props) => props.theme.subsccribeInHotellBg};
`
const Pages = styled.div`
display: flex;
padding-top: 40px;
`

const Backpage = styled.button`
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
const Congratulationpage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
color: #B1B5C3;
border: none; 
background: transparent;
`

const HotelCongratilations = ()=>{
    const {t} = useTranslation();
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/')
      }
      const hundleSubmit2 = (el)=>{
        el.preventDefault()
        History('/hotels')
      }
      const hundleSubmit3 = (el)=>{
        el.preventDefault()
        History('/hoteldetails')
      }
      const hundleSubmit4 = (el)=>{
        el.preventDefault()
        History('/hotelpayment')
      }
      
      const [hotelCong, setHotelCong] = useState({});
      const [error, setError] = useState('');
      const { id } = useParams();
      useEffect(() => {
        console.log(id);
        const getHotelDetail = async () => {
          try {
            const data = await apiCalls.getHotelDetail(id);
            setHotelCong(data);
            console.log(data)
          } catch (error) {
              setError(error.message);
          };
        };
        getHotelDetail();
          
      }, [id]);
    return(
        <HotelCongratulationBg>

        <Container>
        <Pages>
        <Backpage onClick={hundleSubmit}>{t('pageHome')} <RideIcon className='icon-rightside'/></Backpage>
        <Backpage onClick={hundleSubmit2}>{t('pagelist')} <RideIcon className='icon-rightside'/></Backpage>
        <Backpage onClick={hundleSubmit3}>{t('details')}<RideIcon className='icon-rightside'/> </Backpage>
        <Backpage onClick={hundleSubmit4}>{t('paymnet')}<RideIcon className='icon-rightside'/>  </Backpage>
        <Congratulationpage>Congratulations</Congratulationpage>
    </Pages>
<Congratulation props={hotelCong}/>
<Subscribe/>
        </Container>
        </HotelCongratulationBg>

    )
}

export default HotelCongratilations
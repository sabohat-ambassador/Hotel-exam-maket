import styled from "styled-components";
import { Container } from "../styled"
import {Navigate, useNavigate } from "react-router-dom";
import ConfirmBook from "../components/ConfirmBook";
import { useTranslation } from 'react-i18next';
import Subscribe from '../components/Subscribe'
import PaymentCard from '../components/PaymentCard'


const PaymentBg = styled.div`
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
const Payment = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
color: #B1B5C3;
border: none; 
background: transparent;
`

const Paymentsections = styled.div`
display: flex;
justify-content: space-between;
`
const HotelPayment = ()=>{
  const {t} = useTranslation()
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
        History('/hoteldetails/:id')
      }
    return (
        
         <PaymentBg>
       <Container>

            <Pages>
                <Backpage onClick={hundleSubmit}>{t('pageHome')} <RideIcon className='icon-rightside'/></Backpage>
                <Backpage onClick={hundleSubmit2}>{t('pagelist')} <RideIcon className='icon-rightside'/></Backpage>
                <Backpage onClick={hundleSubmit3}>{t('details')}<RideIcon className='icon-rightside'/> </Backpage>
                <Payment>{t('paymnet')} </Payment>
            </Pages>
            <Paymentsections>
              <ConfirmBook/>
              <PaymentCard/>
            </Paymentsections>
            <Subscribe/>
       </Container>
         </PaymentBg>
    )
}

export default HotelPayment
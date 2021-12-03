import styled from "styled-components";
import { Container } from "../styled"
import {Navigate, useNavigate } from "react-router-dom";
import ConfirmBook from "../components/ConfirmBook";


const Pages = styled.div`
display: flex;
padding-top: 40px;
`

const Backpage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: #3B3E44;
margin-right: 5px;
border: none; 
background: transparent;
`
const RideIcon = styled.i`
color: #3B3E44;
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
const HotelPayment = ()=>{
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
    return (
        
       <Container>
            <Pages>
                <Backpage onClick={hundleSubmit}>Home <RideIcon className='icon-rightside'/></Backpage>
                <Backpage onClick={hundleSubmit2}>Hotel list <RideIcon className='icon-rightside'/></Backpage>
                <Backpage onClick={hundleSubmit3}>Hotel details<RideIcon className='icon-rightside'/> </Backpage>
                <Payment>Confirm and pay </Payment>
            </Pages>
            <div>
              <ConfirmBook/>
            </div>
       </Container>
    )
}

export default HotelPayment
import styled from "styled-components"
import {useTranslation} from 'react-i18next'
import { stringTypeAnnotation } from "@babel/types"



const Reviews = styled.div`
display: flex;
align-items: center;
`
const Star = styled.img`
margin-right: 8px;
`
const Review = styled.span`
color:${(props) => props.theme.textsColor};
font-size: 14px;
font-weight: 500;
line-height: 21px;
margin-right: 37px;
`
const SpanRew = styled.span`
color: #84878B
`
const Congratulations = styled.h3`
font-size: 25px;
font-weight: 700;
line-height: 21px;
color: ${(props) => props.theme.trendingTextcolor};
margin-top: 70px;
`
const YourTrip = styled.p`
font-size: 48px;
font-weight: 500;
line-height: 60px;
margin: 0;
color:${(props) => props.theme.tourtripcolor};
border-bottom: 1px solid  ${(props) => props.theme.borders};
padding-bottom: 24px;
width: 822px;
`
const H3 = styled.h3`
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.dropColor};
`
const Other = styled.div`
display: flex;
`
const Baggoge = styled.span`
font-size: 14px;
font-weight: 500;
line-height: 21px;
color:${(props) => props.theme.amenitiesColor};
`
const Bookedd = styled.div`
display: flex;
justify-content: space-between;
`
const AboutPassanger = styled.div`
display: flex;
`
const Info = styled.div`
background: ${(props) => props.theme.priceBg};
border-radius: 12px;
padding: 7px 20px;
margin-right: 24px;
margin-top: 50px;
`
const Information = styled.p`
margin: 0;
font-size: 14px;
font-weight: 500;
line-height: 21px;
color:${(props) => props.theme.infoCOlor};
`
const InformationSpan = styled.span`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #84878B;
`
const DanielImg = styled.img`
border-radius: 15px;
height: 403px;
width: 670px;
object-fit: cover;
`
const ReserveSection = styled.div`
background: ${(props) => props.theme.priceBg};
border: 1px solid ${(props) => props.theme.borderReserveColor};
padding: 19px 25px;
border-radius: 10px;
margin-top: 30px;
`

const H4 = styled.h4`
font-size: 28px;
font-weight: 700;
line-height: 41px;
color: ${(props) => props.theme.feature};
margin-top: 0;
margin-bottom: 18px;
`
const ReserveDetail = styled.p`
color:${(props) => props.theme.detailColor};
margin-top: 4px;
`
const Detailspan = styled.span`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #353945;
`
const DetailIcon = styled.i`
font-size: 15px;
margin-right: 14px;
`
const Reserve = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Congratulation = ()=>{
    const {t} = useTranslation();
    return(
        <div>
            <div>
            <Congratulations>Congratulations!</Congratulations>
            <YourTrip>Your trip has been booked!</YourTrip>
             </div>
             <div>
                 <H3>Switzerland Hotels and Places to Stay </H3>
                 <Other>
                 <Reviews><Star src='/assets/star.png'/><Review>4.8 <SpanRew>(122 {t('reviews')})</SpanRew></Review></Reviews>
                 <Baggoge>1 Baggoge  +  Meals</Baggoge>
                 </Other>
             </div>
             <Bookedd>
                 <div>
                 <AboutPassanger>
                     <Info>
                         <Information>Dates</Information>
                         <InformationSpan>May 15 - 22, 2021 </InformationSpan>
                     </Info>
                     <Info>
                         <Information>Travelers</Information>
                         <InformationSpan>1 Passenger</InformationSpan>
                     </Info>
                 </AboutPassanger>
                 <ReserveSection>
                     <H4>Reserve details</H4>
                    <div>
                        <Reserve>
                            <ReserveDetail><DetailIcon className='icon-Layer'></DetailIcon>Booking code</ReserveDetail>
                            <Detailspan>FD_158456</Detailspan>
                        </Reserve>
                        <Reserve>
                            <ReserveDetail><DetailIcon className='icon-data'></DetailIcon>Date</ReserveDetail>
                            <Detailspan>30 Apr, 2021</Detailspan>
                        </Reserve>
                        <Reserve>
                            <ReserveDetail><DetailIcon className='icon-trash'></DetailIcon>Total</ReserveDetail>
                            <Detailspan>$833</Detailspan>
                        </Reserve>
                        <Reserve>
                            <ReserveDetail><DetailIcon className='icon-cash'></DetailIcon>Payment method</ReserveDetail>
                            <Detailspan>Creadit card</Detailspan>
                        </Reserve>
                    </div>
                 </ReserveSection>
                 </div>
                 <DanielImg src="/assets/daniel.jpg" alt="" />
             </Bookedd>
        </div>
    )
}

export default Congratulation
import styled from "styled-components"
import {useTranslation} from 'react-i18next'



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
color: #3B3E44;
`
const YourTrip = styled.p`
font-size: 48px;
font-weight: 500;
line-height: 60px;
margin: 0;
color: #3B3E44;
`
const H3 = styled.h3`
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
color: #23262F;
`
const Other = styled.div`
display: flex;
`
const Roooms = styled.span`
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #353945;
`
const Bookedd = styled.div`
display: flex;
justify-content: space-between;
`
const AboutPassanger = styled.div`
display: flex;
`
const Info = styled.div`
background: #F4F4F6;
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
color: #353945;
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
                 <Roooms>1 bad room  +  Private room</Roooms>
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
                 <div>
                     <h4>Reserve details</h4>
                    
                 </div>
                 </div>
                 <DanielImg src="/assets/daniel.jpg" alt="" />
             </Bookedd>
        </div>
    )
}

export default Congratulation
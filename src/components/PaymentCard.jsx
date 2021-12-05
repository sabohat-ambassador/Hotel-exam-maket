import styled from "styled-components"
import {useTranslation} from 'react-i18next'


const CardInfo = styled.div`
max-width: 30%;
background: #FFFFFF;
border: 2px solid #E7ECF3;
border-radius: 20px;
padding: 40px;
height: 780px;
`
const SwisHotels = styled.h3`
font-size: 18px;
font-weight: 500;
line-height: 23px;
color: #141416;
`
const Reviews = styled.div`
display: flex;
align-items: center;
`
const Star = styled.img`
margin-right: 8px;
`
const Review = styled.span`
color: #3B3E44;
font-size: 14px;
font-weight: 500;
line-height: 21px;
`
const SpanRew = styled.span`
color: #84878B
`
const SwisImg = styled.img`
border-radius: 15px;
height: 177px;
width: 326px;
object-fit: cover;
margin-top: 26px;
`
const Roomdiv = styled.div`
margin-top: 24px;
`
const Rooms = styled.span`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #84878B;
border-bottom: 1px solid  #EEEEEE;
padding: 15px;
`
const SelectedDate = styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;
`
const Check = styled.span`
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #B1B5C3;
`
const Checked = styled.p`
margin:0;
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #84878B;
`

const CheckOut = styled.div`
border-left: 1px solid #F4F5F6;
padding-left: 14px;
`

const Guest = styled.div`
margin-top: 21px;
`
const BookDetails = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`
const Sum = styled.span`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #353945;
`
const Total = styled.div`
display: flex;
justify-content: space-between;
background: #F4F5F6;
padding: 8px 14px;
border-radius: 6px;
`

const Report = styled.div`
text-align: center;
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #B1B5C3;
margin-top: 30px;
`
const PaymentCard  = ()=>{
    const {t} = useTranslation();
    return(
        <CardInfo>
            <SwisHotels>Switzerland Hotels and Places to Stay </SwisHotels>
            <Reviews><Star src='/assets/star.png'/><Review>4.8 <SpanRew>(122 {t('reviews')})</SpanRew></Review></Reviews>
            <SwisImg src='/assets/daniel.jpg'/>
            <Roomdiv>
            <Rooms>1 bedroom  +  1 private room</Rooms>
             </Roomdiv>
            <SelectedDate>
                <div>
                    <Check>Check in</Check>
                    <Checked>June 27, 2020 </Checked>
                </div>
                <CheckOut>
                <Check>Check out</Check>
                    <Checked>June 30, 2020 </Checked>
                </CheckOut>
            </SelectedDate>
            <Guest>
                <Check>Guest</Check>
                <Checked>2 guests</Checked>
            </Guest>
            <div>
                <h2>Booked details</h2>
                <BookDetails>
                    <Checked>$119  +  5nights</Checked>
                    <Sum>$833</Sum>
                </BookDetails>
                <BookDetails>
                    <Checked>Ocupancy text and fee</Checked>
                    <Sum>-$125</Sum>
                </BookDetails>
                <BookDetails>
                    <Checked>Service free</Checked>
                    <Sum>$103</Sum>
                </BookDetails>
                <Total>
                    <Checked>Total</Checked>
                    <Sum>$833</Sum>
                </Total>
                <Report>Report this property</Report>
            </div>
        </CardInfo>
    )
}

export default PaymentCard
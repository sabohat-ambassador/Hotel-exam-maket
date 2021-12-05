import styled from "styled-components"
import {useTranslation} from 'react-i18next'


const CardInfo = styled.div`
max-width: 30%;
background: ${(props) => props.theme.dropcontentbgColor};
border: 2px solid ${(props) => props.theme.dropcontenborder};
border-radius: 20px;
padding: 40px;
height: 800px;
`
const SwisHotels = styled.h3`
font-size: 18px;
font-weight: 500;
line-height: 23px;
color: ${(props) => props.theme.swisHotelscolor};
`
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
color: ${(props) => props.theme.footerText};
border-bottom: 1px solid  ${(props) => props.theme.dropcontenborder};
padding-bottom: 15px;
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
color: ${(props) => props.theme.checkColors1};
`
const Checked = styled.p`
margin:0;
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: ${(props) => props.theme.checkedColor};
`
const CheckedOther = styled.p`
margin:0;
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: ${(props) => props.theme.checkedOther};
`
const CheckOut = styled.div`
border-left: 1px solid #F4F5F6;
padding-left: 14px;
`

const Guest = styled.div`
margin-top: 21px;
`

const Fare = styled.h2`
font-family: Roboto;
font-size: 26px;
font-weight: 500;
line-height: 27px;
color: ${(props) => props.theme.farecolor};
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
color: ${(props) => props.theme.fareCheckedColor};
`
const Total = styled.div`
display: flex;
justify-content: space-between;
background:  ${(props) => props.theme.totalBgColor};
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
            <SwisHotels>{t('swisHotels')}</SwisHotels>
            <Reviews><Star src='/assets/star.png'/><Review>4.8 <SpanRew>(122 {t('reviews')})</SpanRew></Review></Reviews>
            <SwisImg src='/assets/daniel.jpg'/>
            <Roomdiv>
            <Rooms>{t('rooms')}</Rooms>
             </Roomdiv>
            <SelectedDate>
                <div>
                    <Check>{t('check1')}</Check>
                    <Checked>{t('checked1')}</Checked>
                </div>
                <CheckOut>
                <Check>{t('check2')}</Check>
                    <Checked>{t('checked2')} </Checked>
                </CheckOut>
            </SelectedDate>
            <Guest>
                <Check>{t('cardsName')}</Check>
                <Checked>{t('guests')}</Checked>
            </Guest>
            <div>
                <Fare>{t('fare')}</Fare>
                <BookDetails>
                    <CheckedOther>$119  +  {t('checkedOther1')}</CheckedOther>
                    <Sum>$833</Sum>
                </BookDetails>
                <BookDetails>
                    <CheckedOther>{t('checkedOther2')}</CheckedOther>
                    <Sum>-$125</Sum>
                </BookDetails>
                <BookDetails>
                    <CheckedOther>{t('checkedOther3')}</CheckedOther>
                    <Sum>$103</Sum>
                </BookDetails>
                <Total>
                    <CheckedOther>{t('checkedOther4')}</CheckedOther>
                    <Sum>$833</Sum>
                </Total>
                <Report>{t('report')}</Report>
            </div>
        </CardInfo>
    )
}

export default PaymentCard
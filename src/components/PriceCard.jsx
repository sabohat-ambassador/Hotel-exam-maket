import styled, { ThemeContext } from 'styled-components';
import {Navigate, useNavigate } from "react-router-dom";


const Card = styled.div`
border: 1px solid ${(props) => props.theme.dropcontenborder};
background:  ${(props) => props.theme.dropcontentbgColor};
padding:20px 46px;
width: 29%;
border-radius: 20px;
`

const Prices = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid  #E6E8EC;
`
const Price = styled.h1`
font-family: Roboto;
font-size: 21px;
font-weight: 500;
line-height: 27px;
color:#141416;
`
const Night = styled.span`
color: #84878B;
`
const Price2 = styled.span`
color: #B1B5C4;
font-size: 18px;
font-weight: 400;
line-height: 23px;
`
const Skidka = styled.span`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
color: #FFFFFF;
background: #145CE6;
padding: 6px 10px;
border-radius: 25px;
`
const Row = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 14px;
`

const Check = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #84878B;
`
const Dates = styled.div`
display: flex;
align-items: center;
`
 const Calendar = styled.div`
position: relative;
background: #F4F5F6;
box-sizing: border-box;
border-radius: 10px;
width: 152px;
padding: 12px 20px;
&:nth-child(2){
  margin-right: 9px;
}
`
const DataInput = styled.input`
outline: none;
width: 200px;
background-color: transparent;
border-width: initial;
border-style: none;
border-color: initial;
border-image: initial;
outline: none;
padding-left: 20px;
`
const CalendarIcon = styled.i`
position: absolute;
top: 12px;
left: 15px;
color: #777E90;
font-size: 20px;
`
const GuessDiv = styled.div`
position: relative;
`
const GuestInput = styled.input`
Width :316px;
background: #F4F5F6;
border-radius: 10px;
border: none;
padding: 12px 14px;
`
const BottomIcon = styled.i`
color: #353945;
font-size: 10px;
position: absolute;
top: 60px;
right: 20px;
`
const CardsName = styled.h4`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #777E90;
`

const Label = styled.label`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: #353945;
`

const InputCheck = styled.input`
height: 18px;
width: 18px;
border-radius: 4px;
margin-right: 10px;
`

const Span = styled.span`
font-family: Roboto;
font-size: 14px;
font-weight: 500;
line-height: 27px;
color: #B1B5C3;
`

const Pricess = styled.div`
width: 316px;
border-radius: 10px;
background: #F4F5F6;
padding: 13px 20px;
`
const Chexbox = styled.div`
// margin-right: 50px;
`
const PriceText = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: #353945;
margin-bottom: 0;
`
const Span2 = styled.span`
font-family: Roboto;
line-height: 27px;
color: #353945;
`
const Total = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #777E90;
`

const Span3 = styled.span`
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 27px;
color: #353945;
`
const BookNow = styled.div`
text-align: center;
`
const BookBtn = styled.button`
font-size: 20px;
font-weight: 700;
line-height: 26px;
color: #FFFFFF;
background: #316BFF;
width: 360px;
padding: 11px;
border-radius: 12px;
border: none;
`

const Charged = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: #777E90;
`
const PriceCard = ()=>{
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/hotelpayment')
      }
    return(
        <Card>
            <Prices>
                <Price>$142 <Night>/night</Night></Price>
                <Price2>$184</Price2>
                <Skidka>20% OFF</Skidka>
            </Prices>
            <Dates>
                <div>
            <Check>Check-In</Check>
            <Calendar>
                 <DataInput className='check' type='text' placeholder='May 15, 2021' />
                 <CalendarIcon className='icon-calendar'></CalendarIcon>
            </Calendar>
              </div>
              <div>
            <Check>Check-Out</Check>
            <Calendar>
                <DataInput className='check' type='text' placeholder='May 15, 2021' />
                <CalendarIcon className='icon-calendar'></CalendarIcon>
            </Calendar>
              </div>
            </Dates>
            <GuessDiv>
            <CardsName>Guest</CardsName>
            <GuestInput type='text' placeholder='2 Adults, 1 Children'/>
            <BottomIcon className='icon-bottom'></BottomIcon>
            </GuessDiv>
            
            <CardsName>Extra Features</CardsName>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>Allow to bring pet</Label>
                    </Chexbox>
                 <Span>$13</Span>
            </Row>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>Breakfast a day per person</Label>
                 </Chexbox>
                 <Span>$10</Span>
            </Row>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>Parking a day</Label>
                 </Chexbox>
                 <Span>$6</Span>
            </Row>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>Extra pillow</Label>
                 </Chexbox>
                 <Span>Free</Span>
            </Row>
            <div>
            <CardsName>Price</CardsName>
            <Pricess>
                <Row><PriceText>1 Nights</PriceText><Span2>$500</Span2></Row>
                <Row><PriceText>Discount 20%</PriceText><Span2>$200</Span2></Row>
                <Row><PriceText>Breakfast a day per person</PriceText><Span2>$10</Span2></Row>
                <Row><PriceText>Service fee</PriceText><Span2>$5</Span2></Row>
            </Pricess>
            </div>
            <Row>
                <Total>Total payment</Total>
                <Span3>$300</Span3>
            </Row>
            <BookNow>
            <BookBtn onClick={hundleSubmit}>Book Now</BookBtn>
            <Charged>You will not get charged yet</Charged>
            </BookNow>
        </Card>

    )
}

export default PriceCard
import styled, { ThemeContext } from 'styled-components';
import {Navigate, useNavigate } from "react-router-dom";
import {useTranslation} from 'react-i18next'

const Card = styled.div`
border: 1px solid ${(props) => props.theme.dropcontenborder};
background:  ${(props) => props.theme.dropcontentbgColor};
padding:20px 46px;
width: 29%;
border-radius: 20px;
`

const Prices = styled.div`
display: flex;
border-bottom: 1px solid  #E6E8EC;
padding:15px;
align-items: center;
`
const Price = styled.h1`
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.priceColor};
margin: 0;
`
const Night = styled.span`
color: #84878B;
padding-top: 10px;
`
const Price2 = styled.span`
color: #B1B5C4;
font-size: 18px;
font-weight: 400;
line-height: 23px;
margin-left: 16px;
margin-top: 16px;
`
const Skidka = styled.span`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
color: #FFFFFF;
background: #145CE6;
padding: 14px 12px;
width: 80px;
border-radius: 25px;
margin-left: 50px;
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
color: ${(props) => props.theme.checkColor};
`
const Dates = styled.div`
display: flex;
align-items: center;
`
 const Calendar = styled.div`
position: relative;
background:${(props) => props.theme.inputBgColors};
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
background: ${(props) => props.theme.inputBgColors};
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
color: ${(props) => props.theme.guesExtraColor};
`

const Label = styled.label`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:  ${(props) => props.theme.labelColor};
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
background: ${(props) => props.theme.inputBgColors};
padding: 13px 20px;
`
const Chexbox = styled.div`
// margin-right: 50px;
`
const PriceText = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:  ${(props) => props.theme.labelColor};
margin-bottom: 0;
`
const Span2 = styled.span`
font-family: Roboto;
line-height: 27px;
color: ${(props) => props.theme.labelColor};
`
const Total = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: ${(props) => props.theme.guesExtraColor};
`

const Span3 = styled.span`
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 27px;
color: ${(props) => props.theme.labelColor};
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
      const {t} = useTranslation();
    return(
        <Card>
            <Prices>
               <div style={{display: 'flex', alignItems: 'center'}}> 
                <Price>$142 </Price>
                <Night>/{t('night')}</Night>
                </div>
                <Price2>$184</Price2>
                <Skidka>20% {t('skidka')}</Skidka>
            </Prices>
            <Dates>
                <div>
            <Check>{t('check1')}</Check>
            <Calendar>
                 <DataInput className='check' type='text' placeholder={t('placeholdermay')} />
                 <CalendarIcon className='icon-calendar'></CalendarIcon>
            </Calendar>
              </div>
              <div>
            <Check>{t('check2')}</Check>
            <Calendar>
                <DataInput className='check' type='text' placeholder={t('placeholdermay')}/>
                <CalendarIcon className='icon-calendar'></CalendarIcon>
            </Calendar>
              </div>
            </Dates>
            <GuessDiv>
            <CardsName>{t('cardsName')}</CardsName>
            <GuestInput type='text' placeholder='2 Adults, 1 Children'/>
            <BottomIcon className='icon-bottom'></BottomIcon>
            </GuessDiv>
            
            <CardsName>{t('cardsName2')}</CardsName>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('labelAllow')}</Label>
                    </Chexbox>
                 <Span>$13</Span>
            </Row>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('labelbr')}</Label>
                 </Chexbox>
                 <Span>$10</Span>
            </Row>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('labelpr')}</Label>
                 </Chexbox>
                 <Span>$6</Span>
            </Row>
            <Row>
                    <Chexbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('labelex')}</Label>
                 </Chexbox>
                 <Span>{t('spanfree')}</Span>
            </Row>
            <div>
            <CardsName>{t('cardsName3')}</CardsName>
            <Pricess>
                <Row><PriceText>1 {t('priceText1')}</PriceText><Span2>$500</Span2></Row>
                <Row><PriceText>{t('priceText2')}</PriceText><Span2>$200</Span2></Row>
                <Row><PriceText>{t('priceText3')}</PriceText><Span2>$10</Span2></Row>
                <Row><PriceText>{t('priceText4')}</PriceText><Span2>$5</Span2></Row>
            </Pricess>
            </div>
            <Row>
                <Total>{t('total')}</Total>
                <Span3>$300</Span3>
            </Row>
            <BookNow>
            <BookBtn onClick={hundleSubmit}>{t('bookNow')}</BookBtn>
            <Charged>{t('charged')}</Charged>
            </BookNow>
        </Card>

    )
}

export default PriceCard
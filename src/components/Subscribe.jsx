
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { Container, SubscribeBg } from "../styled"

const SubscribeSection = styled.section`
background-image: url(../../assets/bg.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  border-radius: 16px;
  padding:70px;
position: relative;
bottom: -190px;
z-index:99;
`

const Offers = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const OfferTheme = styled.h4`
font-size: 44px;
line-height: 52px;
letter-spacing: -0.5px;
color: #FFFFFF;
margin:0;
`

const OfferText = styled.p`
font-family: Roboto;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
opacity: 0.88;
width: 370px;
`

const Form = styled.form`
height: 71px;
width: 488px;
background: #FCFCFD;
box-shadow: 10px 16px 60px -7px rgba(0, 0, 0, 0.04);
border-radius: 4px;
color: #B1B5C3;
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
position: relative;
`
const FormInput = styled.input`
height: 71px;
width: 488px;
border-radius: 4px;
border: none;
outline: none;
::placeholder {
    font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
padding-left:20px;
color: #B1B5C3;
}
`
const FormBtn = styled.button`
font-family: Roboto;
font-size: 16px;
color: white;
font-weight: 500;
line-height: 19px;
letter-spacing: -0.02em;
height: 55px;
width: 130px;
border: none;
border-radius: 4px;
background: #353945;
box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
border-radius: 4px;
position: absolute;
top: 8px;
right: 10px;
`
const Subscribe = ()=>{
    const email = useRef(null)
    
    const {t}= useTranslation()
    const handleSubmit =(el)=>{
        el.preventDefault();
        console.log(email.current.value)
    }
    return(
        // <SubscribeBg>

            <Container>
        <SubscribeSection>
            <Offers>

            <div>
                <OfferTheme>{t('offerTheme')}</OfferTheme>
                <OfferText>{t('offerText')}</OfferText>
            </div>
            <Form onSubmit={handleSubmit}>
                <FormInput type='email' ref={email} placeholder={t('placeholder')}></FormInput>
                <FormBtn type='submit'>{t('formBtn')}</FormBtn>
            </Form>
            </Offers>
        </SubscribeSection>
            </Container>
        // </SubscribeBg>
    )
}

export default Subscribe
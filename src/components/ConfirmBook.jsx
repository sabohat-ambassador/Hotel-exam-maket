import styled from "styled-components"

const ConfirmSection = styled.section`
max-width: 70%;
`
const Confirm = styled.h2`
font-size: 40px;
font-weight: 700;
line-height: 60px;
letter-spacing: -0.005em;
color: #23262F;
border-bottom: 1px solid #F4F5F6;
`

const YourTour = styled.h3`
font-size: 34px;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
color: #141416;
`

const ToursInputs = styled.div`
position: relative;
background: #F4F4F6;
border-radius: 15px;
width: 470px;
padding: 7px 20px;
margin-bottom: 20px;
`
const InputName = styled.h4`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #141416;
margin: 0;
`

const Input = styled.input`
border: none;
outline: none;
background: #F4F4F6;
`

const IconPen = styled.i`
color: #84878B;
font-size: 20px;
position: absolute;
top: 20px;
right: 20px;
`
const CreaditSponsers = styled.div`
display: flex;
align-items: center;
position: relative;
border-bottom: 1px solid #F4F5F6;
`
const Cards = styled.div`
background: rgba(47, 128, 237, 0.05);
opacity: 0.67;
box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.1);
border-radius: 6px;
padding: 4px 27px;
`
const Checkimg = styled.img`
position: absolute;
top: -7px;
left: 72px;
`
const CardsSimilar = styled.div`
background: #FFFFFF;
border: 0.5px solid #E6E6E6;
box-sizing: border-box;
border-radius: 6px;

`
const CardsShape = styled.div`
background: #CED9FD;
border-radius: 20px;
width: 335px;
padding: 27px;
`
const LogoCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const UnionIcon = styled.i`
font-size: 28px;
`
const ConfirmBook = ()=>{
    return(
        <ConfirmSection>
            <Confirm>Confirm your Book</Confirm>
            <YourTour>Your tour</YourTour>
            <ToursInputs>
                <InputName>Date</InputName>
                <Input type='text' placeholder='June 27 - 30, 2020' />
                <IconPen className='icon-pen'/>
            </ToursInputs>
            <ToursInputs>
                <InputName>Traveller</InputName>
                <Input type='text' placeholder='1 Passenger' />
                <IconPen className='icon-pen'/>
            </ToursInputs>
            <YourTour>Creadit Cards</YourTour>
            <CreaditSponsers>
                <Cards><img src="/assets/2circle.svg" alt="circle" /></Cards>
                <Checkimg src='/assets/check.svg'/>
                <CardsSimilar><img src="/assets/paypal.svg" alt="paypal" /></CardsSimilar>
                <CardsSimilar><img src="/assets/visa.svg" alt="visa" /></CardsSimilar>
                <CardsSimilar><img src="/assets/american.svg" alt="american" /></CardsSimilar>
            </CreaditSponsers>
           <div>
               <CardsShape>
                   <LogoCard>
                       <UnionIcon className='icon-unioncard'/>
                       <img src="/assets/three.svg" alt="" />
                   </LogoCard>
                   <p>8948   xxxx  xxxx  7894</p>
                   <div>
                       <span>Holder Name</span>
                       <img src="/assets/2circle.svg" alt="" />
                   </div>
               </CardsShape>
           </div>
            
        </ConfirmSection>
    )
}

export default ConfirmBook
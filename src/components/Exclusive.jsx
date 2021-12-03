import { Tab, Tabs, TabList } from 'react-tabs';
import styled from 'styled-components'


const ExclusiveSection = styled.section`
max-width: 60%;
`
const Exclusiveroom = styled.h2`
font-size: 40px;
font-weight: 700;
line-height: 60px;
letter-spacing: -0.005em;
color: #23262F;
margin-bottom: 0;
`
const HotelName = styled.p`
font-size: 24px;
font-weight: 500;
line-height: 36px;
letter-spacing: 0em;
color: #777E90;
margin-top: 10px;
border-bottom: 1px solid #E6E8EC;
`
const ExclusiveText = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color: #353945;
margin-top: 30px;
`

const HotelFeatures = styled.h3`
font-size: 24px;
font-weight: 500;
line-height: 36px;
color: #23262F;
margin-bottom: 10px;
margin-top: 50px;
`

const Featureservice = styled.div`
display: flex;
border-bottom: 1px solid #E6E8EC;
padding-bottom: 50px;
`

const Features = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color: #4F4F4F;
margin-right: 40px;
`

const FeaturesIcon = styled.i`
color: #4F4F4F;
font-size: 18px;
margin-right: 10px;
`

const Amenities = styled.div`
display: flex;
align-items: center;
`
const AmenitiesService1 = styled.div`
margin-right: 190px;
`

const AmenitiesNames = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #353945;
`

const AmenitiesIcon = styled.i`
font-size: 18px;
color: #353945;
margin-right: 17px;
`

const MoreBtn = styled.button`
font-size: 16px;
font-weight: 500;
line-height: 19px;
color: #FFFFFF;
background: #3B71FE;
border-radius: 47px;
padding: 10px 30px;
border: none;
margin-top: 47px;
`
const ExclusiveRooms = ()=>{
    return (
        <ExclusiveSection>

            <Exclusiveroom>Exclusive room in house</Exclusiveroom>
            <HotelName>Zuich, Switzerland</HotelName>
             <Tabs>
                     <TabList>
                        <Tab>Description</Tab>
                        <Tab>Features</Tab>
                        <Tab>Room & Price</Tab>
                        <Tab>Review</Tab>
                        </TabList>
             </Tabs>
             <ExclusiveText>Arabian Park Hotel is a great choice for travellers looking for a 3 star hotel in Dubai. It is located in Bur Dubai. This Hotel stands out as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms), Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah Public Beach (15.8 kms).</ExclusiveText>
             <div>
                 <HotelFeatures>Hotel features</HotelFeatures>
                 <Featureservice>
                     <Features><FeaturesIcon className='icon-wifitop'/>Wi-fi</Features>
                     <Features><FeaturesIcon className='icon-bath'/>Bathup</Features>
                     <Features><FeaturesIcon className='icon-food'/>Breakfast</Features>
                     <Features><FeaturesIcon className='icon-bed'/>Kins bed</Features>
                     <Features><FeaturesIcon className='icon-krug'/>4m 6m</Features>
                 </Featureservice>
             </div>
             <div>
                 <HotelFeatures>Amenities</HotelFeatures>
                 <Amenities>

                 <AmenitiesService1>
                     <AmenitiesNames><AmenitiesIcon className='icon-wifitop'/>Free wifi 24/7</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-komp'/>Free computer</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-klavish'/>Free wifi 24/7</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-televizor'/>Free wifi 24/7</AmenitiesNames>
                 </AmenitiesService1>
                 <div>
                     <AmenitiesNames><AmenitiesIcon className='icon-bath'/>Free clean bathroom</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-pizza'/>Breakfast included </AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-klavish'/>ATM</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-apartment'/>Nearby city</AmenitiesNames>
                 </div>
                 </Amenities>
             </div>
             <MoreBtn>More details</MoreBtn>
        </ExclusiveSection>
    )
}

export default ExclusiveRooms
import styled from "styled-components"
import {useTranslation} from 'react-i18next'
import {Link, Navigate, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import apiCalls from '../config/api';


const HotelListSection = styled.section`
// margin-left: 10px;
`

const AboutHotels = styled.div`
display:flex;
margin-bottom: 50px;
width: 950px;
`

const HotelPhoto = styled.img`
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;

width: 420px;
`

const FilteredHotel = styled.div`
background: ${(props) => props.theme.hotelCradsColotr};
padding: 30px;
border: 1px solid ${(props) => props.theme.borders};
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
`
const CountryName = styled.h3`
font-size: 40px;
font-weight: 700;
line-height: 60px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.hotelThemesColor};
margin-top: 20px;
margin-bottom: 10px;
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
const NameHotel=  styled.div`
display: flex;
// justify-content: space-between;
alignt-items: center;
`
const Flag = styled.span`
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
color:#84878B;
margin-left: 30px;
`
const IconFlaG = styled.i`
color: #84878B;
font-size: 13px;
margin-right: 10px;
`

const LocData = styled.div`
display: flex;
align-items: center;
padding-top: 22px;
`
const Location = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color:${(props) => props.theme.hotelNameColor};
margin-right: 19px;
margin-bottom: 0;
margin-top: 0;
`
const LocationIcon = styled.i`
color: #84878B;
font-size: 16px;
margin-right: 12px;
`
const Data = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color:${(props) => props.theme.hotelNameColor};
`
const CalendarIcon = styled.i`
color: #84878B;
font-size: 16px;
margin-right: 12px;
`
const Depature = styled.h5`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: ${(props) => props.theme.hotelNameColor};
margin-top: 0px;
`
const PlaneIcon = styled.i`
color: #84878B;
font-size: 16px;
margin-right: 7px;
`

const IconsService = styled.i`
color:  ${(props) => props.theme.passengerageColor};
font-size: 14px;
margin-right: 15px;
`

const ServicesHotel = styled.div`
display: flex;
align-items: end;
justify-content: space-between;
`
const Service = styled.div`
list-style: none;
`
const Li = styled.li`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.hotelLiColor};
margin-bottom: 10px;
`

const WWWimg = styled.img`
margin-right: 15px;
`

const Price = styled.div`
font-size: 28px;
font-style: normal;
font-weight: 700;
color:${(props) => props.theme.priceColor};
background: ${(props) => props.theme.priceBg};
border-radius: 37px;
padding: 5px 9px;
margin-bottom: 20px;
`
const ForTwo = styled.span`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color:#84878B;
margin-left: 8px;
`
const BookNow = styled(Link)`
background: #3B71FE;
box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
border-radius: 23px;
font-size: 20px;
font-weight: 700;
line-height: 26px;
padding: 9px 32px;
border: none;
color: #FFFFFF;
cursor: pointer;
`

const ServiceBut = styled.div`
// padding-left: 100px;
text-align: center;
`
const ButtonViewall = styled.div`
text-align: center;
`
const ButtonView = styled.button`
border: 1px solid ${(props) => props.theme.borders};
border-radius: 47px;
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: ${(props) => props.theme.priceColor};
padding: 10px 40px;
background:${(props) => props.theme.viewbgColor};
`

const IconLoading = styled.i`
color: #353945;
font-size: 18px;
padding-right: 15px;
`

const HotelList = ()=>{
    const {t} = useTranslation();
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/HotelDetails')
      }
     
      const [hotelList, setHotelList] = useState([]);
      const [error, setError] = useState('');
    
      useEffect(() => {
          const getHotels = async () => {
            try {
                const data = await apiCalls.getHotels();
                setHotelList(data);
            } catch (error) {
                setError(error.message);
            }
           
          }
          getHotels();
        },[]);

        const mappedHotels = hotelList.map( el => (
            <AboutHotels>
            <HotelPhoto src={el.photo}></HotelPhoto>
            <FilteredHotel>
                <CountryName>{el.name}</CountryName>
                <NameHotel>
                <Reviews><Star src='/assets/star.png'/><Review>{el.rating} <SpanRew>({el.reviews}) reviews</SpanRew></Review></Reviews>
                <Flag><IconFlaG className='icon-flagg'/> {el.location}</Flag>
                </NameHotel>
                <LocData>
                    <Location><LocationIcon className='icon-location'/>{el.location}</Location>
                    <Data><CalendarIcon className='icon-calendar'/>15.05.2021-16.05.2021</Data>
                </LocData>
                <Depature><PlaneIcon className='icon-plane'/>{t('depature')}</Depature>
                <ServicesHotel>
                    <Service>
                        <Li> <IconsService className='icon-wifiright'/>{t('li1')}</Li>
                        <Li><IconsService className='icon-Union'/>{t('li2')}</Li>
                        <Li><IconsService className='icon-cash'/>{t('li3')}</Li>
                        <Li><WWWimg src='/assets/www.svg'/>{t('li4')}</Li>
                        <Li><IconsService className='icon-icsafety'/>{t('li5')}</Li>
                    </Service>
                    <ServiceBut>
                        <Price>${el.price}<ForTwo>{t('fortwo')}</ForTwo></Price>
                        <BookNow  to={`/hoteldetails/${el.id}`}>{t('bookNow')}</BookNow>
                    </ServiceBut>
                </ServicesHotel>
            </FilteredHotel>
        </AboutHotels>
              
           ))
    return(
        <HotelListSection>
           {mappedHotels}
            
            <ButtonViewall>
            <ButtonView><IconLoading className='icon-loading'/>{t('view')}</ButtonView>
            </ButtonViewall>
        </HotelListSection>
    )
}

export default HotelList
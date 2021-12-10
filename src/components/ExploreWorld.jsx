import { Container, Theme, ExplorePlace, ExploreBox , ComfortTheme, BtnSlider} from "../styled"
import {useTranslation} from 'react-i18next'
import styled, { ThemeContext } from 'styled-components';
import {useState, useEffect} from 'react'
import apiCalls from '../config/api';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'

const Explore = styled.section`
margin-top:70px;
margin-bottom: 70px;
`

const ExploreCards = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ExploreText = styled.div`
margin-bottom:50px;
`

const ComfortImg = styled.img`
border-radius: 16px;
transform: matrix(-1, 0, 0, 1, 0, 0);
`

const Reviews = styled.div`
display: flex;
align-items: center;
`

const Star = styled.img`
margin-right: 8px;
`

const Number = styled.p`
font-weight: 500;
font-size: 14px;
color: #3B3E44;
margin-top:10px;
`
const Span = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`

const ComfortSpace = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 12px;
`

const Price = styled.span`
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #316BFF;
padding: 3px 10px;
background: rgba(49, 107, 255, 0.2);
border-radius: 6px
`

const Distance = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`

const Location = styled.p`
font-size: 14px;
line-height: 21px;
color: #84878B;
`

const IconLoc = styled.i`
color:#B1B5C3;
font-size: 15px;
`

const Rooms = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: #84878B;
`
const IconRoom  = styled.i`
color:#B1B5C3;
font-size: 15px;
`
const TopText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`


const ExploreWorld = ()=>{
    const {t} = useTranslation();
    const [exploreList, setExplore] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const getExplore = async () => {
          try {
              const data = await apiCalls.getExplore();
              setExplore(data);
          } catch (error) {
              setError(error.message);
          }
         
        }
        getExplore();
      },[]);

      
   const mappedExplore = exploreList.map( el => (
    
    <SwiperSlide>
     <ExploreBox>
                        <ComfortImg src={el.image}></ComfortImg>
                        <Reviews>
                            <Star src='/assets/star.png'/>
                            <Number>{el.rating} <Span>(147)</Span> </Number> 
                        </Reviews>
                        <ComfortSpace>
                            <ComfortTheme>{el.title}</ComfortTheme>
                            <Price>$ {el.price}</Price>
                        </ComfortSpace>
                        <Distance>{el.radius} to Town Center</Distance>
                       <Location> <IconLoc className='icon-location'></IconLoc> {el.location}</Location> 
                       <Rooms> <IconRoom className='icon-apartment'> </IconRoom>Rooms available: {el.rooms}</Rooms>
                    </ExploreBox>
      </SwiperSlide>
   ))
   SwiperCore.use([Navigation]);
    return(
        <Container>
            <Explore>
                <TopText>
                <ExploreText>
                    <Theme>{t('explore')}</Theme>
                    <ExplorePlace>{t('explorePlace')}</ExplorePlace>
                </ExploreText>
                <div> 
                    <BtnSlider className='swipere-xplore-prev'><i className='icon-leftside'></i></BtnSlider> 
               <BtnSlider className='swiper-explore-next' ><i className='icon-rightside'></i></BtnSlider> 
               </div>

                </TopText>
                <Swiper spaceBetween={15}  slidesPerView={4}loop modules= {{Navigation}}
    
        navigation={{
            nextEl: '.swiper-explore-next',
            prevEl: '.swipere-xplore-prev'
        }}
            >
                <ExploreCards>
                  
                  {error ? error: mappedExplore}
                 
                </ExploreCards>
                </Swiper>
            </Explore>
        </Container>
    )
}

export default ExploreWorld
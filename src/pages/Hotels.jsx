import Subscribe from '../components/Subscribe'
import HotelList from '../components/HotelList'
import Filter from '../components/FilterList'
import styled from 'styled-components'
import MainSearch from '../components/MainSearch'
import {Navigate, useNavigate } from "react-router-dom";
import {Section} from '../styled'
import { useTranslation } from 'react-i18next';
const Container = styled.div`
padding: 40px 
`
const MainSearchsection = styled.section`
padding-top: 180px;
margin-bottom: 60px;
`
const Pages = styled.div`
display: flex;
padding-top: 40px;
`
const HomePage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.homePageColor};
margin-right: 5px;
border: none; 
background: transparent;
`
const RideIcon = styled.i`
color: ${(props) => props.theme.homePageColor};
font-size: 10px;
`
const HotelListPage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:#B1B5C3;
border: none; 
background: transparent;
`
const Hotels=()=>{
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/')
      }
      const {t}=  useTranslation()
    return(
        <Section>
            <Container>

            <Pages>
                <HomePage onClick={hundleSubmit}>{t('pageHome')} <RideIcon className='icon-rightside'></RideIcon></HomePage>
                <HotelListPage>{t('pagelist')}</HotelListPage>
            </Pages>
            </Container>
            <MainSearchsection><MainSearch/></MainSearchsection>
        <Container>
            <div style={{display:'flex', alignItems:'start', justifyContent:'space-between'}}>
         <Filter/>
        <HotelList/>
        </div>
        </Container>
        <div>
            <Subscribe/> 
        </div>
        </Section>

    )
}

export default Hotels
import React from 'react';
import Featured from '../components/Featured';
import ExploreWorld from '../components/ExploreWorld'
import MainSearch from '../components/MainSearch'
import Intro from '../components/Intro'
import BestPlaces from '../components/BestPlaces'
import Subscribe from '../components/Subscribe'
import TopTour from '../components/TopTour'
import Passion from '../components/Passion';
import TrendingCites from '../components/TrendingCites';
import {ForBgColor} from '../styled'


const Home = () => {
    return (
        <section>
            <ForBgColor>

            <Intro/>
            <MainSearch/>
            <BestPlaces/>
             <Featured/>
            
            <TopTour/>
            <ExploreWorld/>
            </ForBgColor>
            <TrendingCites/>
            <Passion/>
            <ForBgColor>

            <Subscribe/>
            </ForBgColor>
        </section>
    );
}

export default Home;

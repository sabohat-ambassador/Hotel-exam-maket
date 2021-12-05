import styled from "styled-components";

export const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
`

export const Theme = styled.h2`
font-size: 48px;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: left;
margin: 5px;
color:${(props) => props.theme.placeNameColor};
`

export const MainHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
    padding: 10px 40px;
    background-color: ${(props) => props.theme.backgroundColorHeader}
`;

export const DropdownContents = styled.div`
display: none;
position: absolute;
color: ${(props) => props.theme.dropColor}; 
left: -80px;
top: 20px;
background: ${(props) => props.theme.dropcontentbgColor} ;
border-radius: 16px;
border: 1px solid ${(props) => props.theme.dropcontenborder};
min-width: 160px;
box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
z-index: 1;
`

export const DropdownLink = styled.a`
    color: ${(props) => props.theme.dropdownLinkColor};
    display: flex;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 8px;
    &:hover {
        background: '#FFFFFFF';
    }
`

export const DropBtn = styled.button`
    background-color: transparent;
    color:${(props) => props.theme.dropBtncolor};
    border: none;
    text-transform: uppercase;
    cursor: pointer;
` 
export const TripGuide = styled.h2`
font-family: Open Sans;
font-size: 20px;
font-weight: 700;
line-height: 27px;
margin-left: 11px;
color: ${(props) => props.theme.logoNameColor};
`
export const BestBg = styled.div`
background-color: ${(props) => props.theme.bestbgcolor}
`

export const IntroTheme = styled.h2`
font-size: 48px;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
color:  ${(props) => props.theme.introthemecolor}
`

export const ForBgColor = styled.div`
background-color: ${(props) => props.theme.forBgColor};
padding-bottom: 70px;
`


export const Search = styled.div`
padding: 30px;
margin-top:-150px;
background: ${(props) => props.theme.mainSearchbg};
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
border-radius: 20px;
`

export const NameActive = styled.h5`
font-size: 14px;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
margin-top: 0;
color: ${(props) => props.theme.nameActiveHotel};
margin-bottom:0;
margin-left: 8px;
`
export const TopMenus = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
border-bottom: 1px solid ${(props) => props.theme.borderBottomColor};
align-items:center;
`
export const PlaceName= styled.h4`
font-size: 20px;
font-weight: 700;
line-height: 26px;
letter-spacing: 0em;
margin-top: 21px;
margin-bottom: 9px;
color: ${(props) => props.theme.placeNameColor}
`

export const Text = styled.p`
font-family: Poppins, sans-serif;
font-size: 16px;
line-height: 24px;
color:  ${(props) => props.theme.textcolor};
margin-bottom: 37px;
`;

export const ExplorePlace = styled.p`
font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
color: ${(props) => props.theme.exploreColor}
`
export const Calm = styled.span`
font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
color: ${(props) => props.theme.calmcolor};

`

export const ExploreBox = styled.div`
width: 250px;
border-radius: 20px;
background-color: ${(props) => props.theme.exploreCardsColor};
border: 1px solid ${(props) => props.theme.exploreCardsBorder};
padding: 14px;
&:hover {
    {
       background: ${(props) => props.theme.exploreHover};
       box-shadow: 0px 15px 45px rgba(102, 102, 102, 0.1);
   }
`


export const TrendingSection = styled.section`
background-color: ${(props) => props.theme.trendingBgColor};
padding-bottom: 70px;
`

export const PassionBg = styled.section`
background-color: ${(props) => props.theme.passionbg};
`

export const TrendingBox = styled.div`
display: flex;
background: ${(props) => props.theme.trendingboxbgColor};
border-radius: 20px;
width: 534px;
padding: 18px;
margin-bottom: 35px;
` 

export const TrendingPlace = styled.h4`
font-size: 24px;
font-weight: 700;
line-height: 36px;
letter-spacing: 0em;
margin 0;
color:${(props) => props.theme.trendingPlacecolor};
`

export const ComfortTheme = styled.h4`
font-weight: bold;
font-size: 20px;
line-height: 26px;
margin:0;
color:${(props) => props.theme.comfortTheme};
`


export const SubscribeBg = styled.section`
background-color:${(props) => props.theme.subscribeBg};
`

export const FooterSection = styled.section`
background-color:${(props) => props.theme.footerbgColor};
padding-bottom: 150px;
`
export const ButtonChangeSun = styled.button`
background: ${(props) => props.theme.sunbg};
color: ${(props) => props.theme.sunColor};
box-shadow: 0px 2px 2px rgba(67, 67, 67, 0.1);
border-radius: 8px;
border: none;
padding: 9px 20px;
`;

export const ButtonChangeMoon = styled.button`
color:${(props) => props.theme.mooncolor};
border: none;
background: ${(props) => props.theme.moonBg};
padding: 9px 20px;
box-shadow: ${(props) => props.theme.shadow};
border-radius: 8px;
`
export const Calendar = styled.div`
position: relative;
background: ${(props) => props.theme.bgCalandar};
border: 1px solid ${(props) => props.theme.calendarBorder};
box-sizing: border-box;
border-radius: 8px;
width: 250px;
padding: 8px 20px;
&:nth-child(2){
  margin-right: 9px;
}
`
export const Section = styled.section`
background-color: ${(props) => props.theme.hotelsbgcolor};
`


export const DarkTheme = {
    sectionBg: '#141416',
    backgroundColorHeader:  `#FFFFFF `,
    logoNameColor: '#222529',
    dropcontenborder: '#E7ECF3',
    dropdownLinkColor: '3B3E44',
    dropBtncolor: '#84878B',
    dropcontentbgColor: '#FFFFFF',
    dropColor: '#23262F',
    bellColor: '#000000',
    profileNameColor: '#3B3E44',
    iconProfile: '#777E90',
    bestbgcolor: '#FFFFFF',
    introthemecolor: '#23262F',
    forBgColor: '#FFFFFF',
    mainSearchbg: '#FFFFFF',
    mdhotelIcon: '#3B3E44',
    nameActiveHotel: '#3B3E44',
    borderBottomColor: '#E7ECF3',
    placeNameColor: '#3B3E44',
    cardHover: '#FFFFFF',
    themecolor: '#FFFFFF',
    textcolor: '#3b3e44',
    calmcolor: '#777E90',
    exploreColor: '#84878B',
    exploreCardsColor: '#FFFFFF',
    exploreCardsBorder: '#E7ECF3',
    exploreHover: '#FFFFFF',
    trendingBgColor: '#F5F5F5',
    passionbg: '#FFFFFF',
    trendingTextcolor: '#3B3E44',
    trendingboxbgColor: '#FFFFFF',
    trendingPlacecolor: '#282832',
    numbercolor: '#3B3E44',
    spanColorTrending: '#84878B',
    comfortTheme: ' #3B3E44',
    priceColor: ' #3B3E44',
    footerbgColor: '#F4F5F6',
    subscribeBg: '#FFFFFF',
    footerThemecolor: '#222529',
    footerText : '#84878B',
    footerliColor:'#84878B',
    footerButtonbg:'#FFFFFF',
    footerButBorder: '#EFEFEF',
    moonBg: '#FFFFFF',
    mooncolor:'#868B90',
    sunbg: '#FCFCFD',
    sunColor: '#3B3E44',
    shadow: '0',
    subsccribeInHotellBg: '#FAFAFB',
    passengerNameColor:'#777E90',
    passengerageColor:'#B1B5C3',
    contentBtn: '#E6E8EC',
    bgCalandar: '#F4F5F7',
    calendarColor: '#3B3E44',
    calendarBorder: '#E7E8EA',
    iconSearchcolor: '#FFFFFF',
    hotelsbgcolor: '#FAFAFB',
    hotelThemesColor: '#141416',
    inputbgcolor:'#FFFFFF',
    border:'#E7ECF3',
    filteredColor: '#3B3E44',
    borders: '#E7ECF3',
    spanColor: '#3B3E44',
    hotelCradsColotr: '#FAFAFB',
    hotelLiColor: '#3B3E44',
    priceColor: '#222529',
    priceBg: '#F4F5F6',
    homePageColor: '#3B3E44',
    viewbgColor: '#FAFAFB',
    hotelNameColor: '#252525',
    span1Color:'#38B2451A',
    span2Color:'#FD97041A',
    span3Color:'#EAEEFA',
    span4Color:'#FCEBF1',
    span5Color:'#FBEEE8',
    spanColor1: '#38B245',
   spanColor2: '#FD9704',
   spanColor3: '#0B3BA7',
   spanColor4: '#E96594',
   spanColor5: '#DC6E3D',
   exlusiveroomColor: '#23262F',
   zuichcolor:'#777E90',
   exclusiveColor: '#353945',
   feature: '#23262F',
   featureLicolor: '#4F4F4F',
   amenitiesColor: '#353945',
   inputBgColors: '#F4F5F6',
   priceColor:'#141416',
   checkColor: '#84878B',
   guesExtraColor: '#777E91',
   labelColor:'#353945',
   confirmColor: '#23262F',
   yourtour: '#141416',
   inputNAme: '#141416',
   cardSponsorColor: '#FFFFFF'

}

export const LightTheme = {
    sectionBg: '#FCFCFD',
    backgroundColorHeader: '#222529',
    logoNameColor: '#FFFFFF',
    dropcontenborder: '#3B3E44',
    dropdownLinkColor: '#F4F5F6',
    dropBtncolor: '#E7ECF3',
    dropcontentbgColor: '#222529',
    dropColor: '#F4F5F6',
    bellColor: '#FFFFFF',
    profileNameColor: '#FCFCFD',
    iconProfile: '#B1B5C3',
    bestbgcolor: '#141416',
    introthemecolor: '#F4F5F6',
    forBgColor: '#141416',
    mainSearchbg: '#222529',
    mdhotelIcon: '#FCFCFD',
    nameActiveHotel: '#FCFCFD',
    borderBottomColor: '#3B3E44',
    placeNameColor: '#E7ECF3',
    cardHover: '#222529',
    themecolor: '#141416',
    textcolor: '#B1B5C3 ',
    calmcolor:'#B1B5C3', 
    exploreColor:'#B1B5C3',
    exploreCardsColor: '#222529',
    exploreCardsBorder:'#3B3E44',
    exploreHover: '#222529',
    trendingBgColor: '#18191B',
    passionbg: '#141416',
    trendingTextcolor: '#B1B5C3',
    trendingboxbgColor: '#222529',
    trendingPlacecolor: '#FCFCFD',
    numbercolor: '#B1B5C4',
    spanColorTrending: '#B1B5C4',
    comfortTheme: '#FCFCFD',
    priceColor: '#F4F5F6',
    footerbgColor: '#222529',
    subscribeBg: '#141416',
    footerThemecolor: '#FFFFFF',
    footerText : '#E7ECF3',
    footerliColor:'#E7ECF3',
    footerButtonbg:'#3B3E44',
    footerButBorder: '#464950',
    moonBg: '#474A52',
    mooncolor:' #E7ECF3',
    sunbg: '#3B3E44',
    sunColor: '#84878B',
    shadow: '0px 2px 2px rgba(67, 67, 67, 0.1)',
    subsccribeInHotellBg: '#141416',
    passengerNameColor:'#FCFCFD',
    passengerageColor:'#84878B',
    contentBtn: '#84878B',
    bgCalandar: '#3B3E44',
    calendarColor: '#FCFCFD',
    calendarBorder: '#4A4E54',
    iconSearchcolor: '#42464B',
    hotelsbgcolor: '#141416',
    hotelThemesColor: ' #FFFFFF',
    inputbgcolor:'#222529',
    border:'#222529',
   filteredColor: '#E7ECF3',
   borders: '#3B3E44',
   spanColor: '#F4F5F6',
   hotelCradsColotr: '#141416',
   hotelLiColor: '#E7ECF3',
   priceColor: '#FFFFFF',
   priceBg: '#222529',
   homePageColor: '#E7ECF3',
   viewbgColor: '#141416',
   hotelNameColor: '#FCFCFD',
   span1Color:'#3B3E44',
   span2Color:'#3B3E44',
   span3Color:'#3B3E44',
   span4Color:'#3B3E44',
   span5Color:'#3B3E44',
   spanColor1: '#E7ECF3',
   spanColor2: '#E7ECF3',
   spanColor3: '#E7ECF3',
   spanColor4: '#E7ECF3',
   spanColor5: '#E7ECF3',
   exlusiveroomColor: '#F4F5F6',
   zuichcolor:'#84878B',
   exclusiveColor: '#B1B5C3',
   feature: '#E7ECF3',
   featureLicolor: '#B1B5C3',
   amenitiesColor: '#B1B5C3',
   inputBgColors: '#3B3E44',
   priceColor:'#FCFCFD;',
   checkColor: '#FCFCFD',
   guesExtraColor: '#FCFCFD',
   labelColor:'#E7ECF3;',
   confirmColor: '#FFFFFF',
   yourtour: '#E7ECF3',
   inputNAme: '#B1B5C3',
   cardSponsorColor: '#23262F',
   sponsorBorder: ''
};


import styled from "styled-components"


const Row = styled.div`
display: flex;
align-items: center;
margin-top: 44px;
`
const LeftSide = styled.div`
margin-right: 20px;
`
const LeftImg = styled.img`
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
width: 700px;
`
const RightSide = styled.div`
// margin-bottom: 30px;
`

const RightImg1= styled.img`
border-top-right-radius: 20px;
margin-bottom: 12px;
width: 450px;
`
const Ride = styled.img`
margin-bottom: 12px;
width: 450px;
`
const RightImg2= styled.img`
border-bottom-right-radius: 20px;
width: 450px;
`
const HotelPhotos = ()=>{
    return (
        <Row>
            <LeftSide>
                <LeftImg src='/assets/Francesca.jpg'/>
            </LeftSide>
            <RightSide>
                <RightImg1 src='/assets/ralph.jpg'/>
                <Ride src='/assets/sidekix.jpg'/>
                <RightImg2 src='/assets/patrick.jpg'/>
            </RightSide>
        </Row>
    )
}

export default HotelPhotos
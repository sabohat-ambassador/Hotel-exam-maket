import styled from "styled-components"


const Img = styled.img`
border-radius; 20px;
width: 700px;
`



const HotelPhotos = ()=>{
    return (
        <div>
            <div>
                <Img src={movieInfo.photo}/>
            </div>
        </div>
    )
}

export default HotelPhotos
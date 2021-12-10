import React from 'react';
import styled from "styled-components";

const Box = styled.div`
    width: 500px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.cardBg};
    padding: 10px 20px;
`;

const Home = () => {
    return (
        <div>
            <Box>This is home page </Box>
        </div>
    );
}

export default Home;

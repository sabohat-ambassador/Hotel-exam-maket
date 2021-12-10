import styled from "styled-components";

export const Button = styled.button`
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    padding: 10px 20px;
    font-size: ${(props) => props.theme.fontSize};
`;

export const Card = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.cardBg};
    padding: 10px 20px;
`;

export const DarkTheme = {
    backgroundColor: 'blue',
    cardBg: 'grey',
    color: 'white',
    boxShadow: '',
    fontSize: '20px'
};

export const LightTheme = {
    backgroundColor: 'yellow',
    cardBg: 'pink',
    color: 'black',
    fontSize: '8px'
};

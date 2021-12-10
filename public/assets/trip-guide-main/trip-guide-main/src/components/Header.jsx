import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Button, Card } from '../styled';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <Button onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>theme changer</Button>
            <Card>This is card</Card>
        </header>
    );
}

export default Header;

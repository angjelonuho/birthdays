import React from 'react';
import Styles from './styles'

type HeaderProps = {
    text: string | ''
}

const Header = ({ text }: HeaderProps) => {
    return (
        <div data-testid="h1">
            <h1 style={Styles.Text}>{text}</h1>
        </div>
    )

}

export default Header
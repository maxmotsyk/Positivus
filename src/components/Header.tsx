import React from 'react';
import styled from 'styled-components';
import StyledIcon from './UI/Icon';
import Button from './UI/Button';


const StyledHeader = styled.header`
    padding: 66px 0 0 0;
    width:100%;
    max-width: 1240px;
    display:flex;
    align-items:center;

    .header___logo_col{
        display:flex;
        margin: 0 auto 0 0;

        h3{
            margin: 0 0 0 13px;
        }

    }

    .header___navbar{
        display:flex;
        align-items:center;


        li{
            margin:0 40px 0 0;
        }
    }

`
const Header: React.FC = () => {

    return (
        <StyledHeader>
            <div className="header___logo_col">
                <StyledIcon icon = 'logo' width='36px' height='36px'/>
                <h3>
                    Positivus
                </h3>
            </div>

            <nav className='header___navbar'>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Use Cases</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
            </nav>

            <Button as='a' type='skeletonBt' children='Request a quote' width='231px' height='68px'/>
        </StyledHeader>
    )

}

export default Header;
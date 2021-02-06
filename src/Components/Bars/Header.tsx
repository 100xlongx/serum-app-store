import React from "react";

import { Pane, Image, Link } from 'evergreen-ui';

import { Link as RouterLink } from 'react-router-dom';

import logo from "../../assets/images/serum192.png";

import SocialMediaIcons from "../Socials/SocialMediaIcons";

import { useMediaQuery } from "react-responsive";

const Header: React.FC = () => {

    const isDesktop = useMediaQuery({ minWidth: 992 })

    return(
        <Pane display="flex" padding={16} background="#1e2423" alignItems="center">
            <Pane flex={1} alignItems="center" display="flex">
                <Image marginRight='24px' src={logo} width={48}/>

                <Pane display='flex' justifyContent='center' alignItems='center' borderRadius={8} padding='8px' marginRight='16px'><RouterLink className='linkbox' to='/'>Applications</RouterLink></Pane>
                <Pane display='flex' justifyContent='center' borderRadius={8} padding='8px' marginRight='16px'><RouterLink className='linkbox' to='/medium'>Medium</RouterLink></Pane>
            </Pane>
            <Pane>
                {isDesktop ? <SocialMediaIcons/> : ""}
            </Pane>
        </Pane>
    )
}

export default Header;
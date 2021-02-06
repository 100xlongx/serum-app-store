import React from "react";

import { Pane, Image, Link } from 'evergreen-ui';

import logo from "../../assets/images/serum192.png";

import SocialMediaIcons from "../Socials/SocialMediaIcons";

const Header: React.FC = () => {
    return(
        <Pane display="flex" padding={16} background="#1e2423" alignItems="center">
            <Pane flex={1} alignItems="center" display="flex">
                <Image marginRight='24px' src={logo} width={48}/>

                <Pane display='flex' justifyContent='center' alignItems='center' borderRadius={4} padding='6px' marginRight='16px'><Link textDecoration='none' color='green' href="/">Applications</Link></Pane>
                <Pane display='flex' justifyContent='center' borderRadius={4} padding='6px' marginRight='16px'><Link textDecoration='none' color='green' href="/medium">Medium</Link></Pane>
            </Pane>
            <Pane>
                {/* {Buttons.map((button, index) => <Button key={index} marginRight={16} onClick={() => {history.push(`/${button.urlSuffix}`)}} >{button.buttonText}</Button>)} */}
                <SocialMediaIcons/>
            </Pane>
        </Pane>
    )
}

export default Header;
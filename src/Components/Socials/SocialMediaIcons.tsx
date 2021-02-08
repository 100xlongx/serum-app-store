import React from 'react';

import { Pane, Heading } from 'evergreen-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTelegram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

interface IconProps {
    icon: IconDefinition,
    url: string,
}
 
/*
SocialMediaIcons

This component will map out FontAwesome icons that will be used as links to social media applications.
*/
const SocialMediaIcons : React.FC = () => {
    const Icons : Array<IconProps> = [
        {
            icon: faGithubSquare,
            url: 'https://github.com/project-serum',
        },
        {
            icon: faTelegram,
            url: 'https://t.me/ProjectSerum',
        },
        {
            icon: faDiscord,
            url: 'https://discord.gg/EDvudv6',
        },
        {
            icon: faTwitter,
            url: 'https://twitter.com/ProjectSerum',
        },
    ]

    return <Pane display='flex' justifyContent='center'>
        {Icons.map((icon, index) => <Heading marginRight='18px' key={'icon_' + index} size={900} color="#40C8DB"><FontAwesomeIcon cursor="pointer" onClick={() => window.location.href=icon.url} icon={icon.icon}/></Heading>)}
    </Pane>
}

export default SocialMediaIcons;
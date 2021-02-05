import { Pane, Heading } from 'evergreen-ui';
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTelegram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

const InformationContainer: React.FC = () => {

    interface IconProps {
        icon: IconDefinition,
        url: string,
    }

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

    return <Pane
    borderRadius={3}
    background='#1e2423'
    paddingX='20px'
    paddingBottom='5px'
    paddingTop= '5px'
    display= "block"
    textAlign='center'
    padding='80px'
    marginY= '18px'>

        <Heading size={900} marginBottom="18px" color='white'>Serum: Faster, Cheaper and more Powerful DeFi </Heading>
        
        <Pane display='flex' justifyContent='center'>
            {Icons.map((icon, index) => <Heading marginRight='18px' key={'icon_' + index} size={900} color="#40C8DB"><FontAwesomeIcon cursor="pointer" onClick={() => window.location.href=icon.url} icon={icon.icon}/></Heading>)}
        </Pane>

    </Pane>
}

export default InformationContainer;
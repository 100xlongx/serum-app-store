import React from "react";

import { Pane, Link } from 'evergreen-ui';

import { useMediaQuery } from "react-responsive";

import SocialMediaIcons from '../Socials/SocialMediaIcons';

interface LinkProps {
    url: string,
    text: string
}

const SerumLinks: Array<LinkProps> = [
    {
        url: "https://solanabeach.io/",
        text: "Solana Network"
    },
    {
        url: "https://projectserum.com/",
        text: "Project Serum "
    },
    {
        url: "https://github.com/project-serum",
        text: "GitHub"
    },
    {
        url: "https://t.me/ProjectSerum",
        text: "Telegram"
    },
    {
        url: "https://discord.gg/EDvudv6",
        text: "Discord"
    },
    {
        url: "https://projectserum.com/developer-resources",
        text: "Serum Developer Resources"
    },
]

const Footer: React.FC = () => {

    const isDesktop = useMediaQuery({ minWidth: 992 })

    return(
        <Pane width='100%' overflow='clip' display="flex" padding={16} background="#1e2423">
            <Pane flex={1} width='80%' overflow='clip' alignItems="center" justifyContent='center' display="flex">
                {isDesktop ? SerumLinks.map((link, index) => <Link marginRight={12} key={index} href={link.url}>{link.text}</Link>) :
                <SocialMediaIcons/>}
            </Pane>
        </Pane>
    )
}

export default Footer;
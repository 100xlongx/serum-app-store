import React from "react";

import { Pane, Link } from 'evergreen-ui';

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
    return(
        <Pane display="flex" padding={16} background="#1e2423">
            <Pane flex={1} alignItems="center" justifyContent='center' display="flex">
                {/* <Heading color='rgb(128, 128, 128)' size={600}>Placeholder text for the footer</Heading> */}
                {SerumLinks.map((link, index) => <Link marginRight={12} key={index} href={link.url}>{link.text}</Link>)}
            </Pane>
        </Pane>
    )
}

export default Footer;
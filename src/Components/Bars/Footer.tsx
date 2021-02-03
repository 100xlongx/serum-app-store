import React from "react";

import { Pane, Heading } from 'evergreen-ui';

const Footer: React.FC = () => {
    return(
        <Pane display="flex" padding={16} background="#1e2423">
            <Pane flex={1} alignItems="center" display="flex">
                <Heading color='rgb(128, 128, 128)' size={600}>Placeholder text for the footer</Heading>
            </Pane>
        </Pane>
    )
}

export default Footer;
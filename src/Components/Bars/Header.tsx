import React from "react";

import { Pane, Button, Heading } from 'evergreen-ui';

const Header: React.FC = () => {
    return(
        <Pane display="flex" padding={16} background="#1e2423">
            <Pane flex={1} alignItems="center" display="flex">
                <Heading color='rgb(128, 128, 128)' size={600}>Placeholder - put social media icons + links up here probs</Heading>
            </Pane>
            <Pane>
                <Button marginRight={16}>Placeholder</Button>
                <Button appearance="primary">Placeholder</Button>
            </Pane>
        </Pane>
    )
}

export default Header;
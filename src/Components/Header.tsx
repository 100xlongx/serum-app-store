import React from "react";

import { Pane, Button, Heading } from 'evergreen-ui';

const Header = () => {
    return(
        <Pane display="flex" padding={16} background="rgb(24, 27, 98)">
            <Pane flex={1} alignItems="center" display="flex">
                <Heading color='white' size={600}>Serum Appstore</Heading>
            </Pane>
            <Pane>
                <Button marginRight={16}>Placeholder</Button>
                <Button appearance="primary">Placeholder</Button>
            </Pane>
        </Pane>
    )
}

export default Header;
import React from "react";

import { Pane, Heading } from 'evergreen-ui';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return(
        <Pane display="flex" padding={16} background="#1e2423">
            <Pane flex={1} alignItems="center" display="flex">
                <Heading color='rgb(128, 128, 128)' size={600}>Placeholder - put social media icons + links up here probs</Heading>
                <Link to="/">Applications</Link>
                <Link to="/socials">Socials</Link>
            </Pane>
            <Pane>
            </Pane>
        </Pane>
    )
}

export default Header;
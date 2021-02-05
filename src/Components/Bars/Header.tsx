import React from "react";

import { Pane, Button } from 'evergreen-ui';
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
    let history = useHistory();

    interface LinkButtonProps {
        urlSuffix: string,
        buttonText: string
    }

    const Buttons : Array<LinkButtonProps> = [
        {
            urlSuffix: '',
            buttonText: 'Home'
        },
        // {
        //     urlSuffix: 'twitter',
        //     buttonText: 'Twitter'
        // },
        {
            urlSuffix: 'medium',
            buttonText: 'Medium'
        },
    ]

    return(
        <Pane display="flex" padding={16} background="#1e2423">
            <Pane flex={1} alignItems="center" display="flex">
                Serum Web App
            </Pane>
            <Pane>
                {Buttons.map((button, index) => <Button key={index} marginRight={16} onClick={() => {history.push(`/${button.urlSuffix}`)}} >{button.buttonText}</Button>)}
            </Pane>
        </Pane>
    )
}

export default Header;
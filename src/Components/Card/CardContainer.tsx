import React from 'react';

import { AppCard, AppCardProps } from "./AppCard";

import { Pane } from 'evergreen-ui';

interface CardContainerProps {
    apps: Array<AppCardProps>
}

/*
Card Container Component

Container for the card apps.

apps: an array of applications
*/
const CardContainer: React.FC<CardContainerProps> = ({apps}) => {

    return <Pane
    display="grid"
    gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    marginBottom = '0.5em'
    > 
        {apps.map((app, index) => <AppCard key={index} {...app}/>)} 
    </Pane>;
}

export default CardContainer;
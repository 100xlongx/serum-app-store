import React from "react";

import { AppCardProps } from "../Card/AppCard"
import CardContainer from "../Card/CardContainer";

import { Pane, Heading, Paragraph } from 'evergreen-ui';

export interface CategoryProps {
    categoryName: string,
    desc?: string,
    apps: Array<AppCardProps>,
}

const CategoryContainer: React.FC<CategoryProps> = ({categoryName, desc, apps}) => {
    return <Pane
    borderRadius={3}
    background='#1e2423'
    paddingX='20px'
    paddingBottom='5px'
    paddingTop= '5px'
    marginY= '18px'>
        <Pane>
            <Heading color='white' size={800} marginTop='default'>{categoryName}</Heading>
            <Heading color='rgb(128, 128, 128)' size={400} marginTop="8px">{desc}</Heading>
        </Pane>
        <CardContainer apps={apps}/>
    </Pane>
}

export default CategoryContainer;

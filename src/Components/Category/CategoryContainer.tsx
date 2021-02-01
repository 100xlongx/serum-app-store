import React from "react";

import { AppCardProps } from "../Card/AppCard"
import CardContainer from "../CardContainer";

import { Pane, Heading, Paragraph } from 'evergreen-ui';

export interface CategoryProps {
    categoryName: string,
    desc: string,
    apps: Array<AppCardProps>,
}

const CategoryContainer: React.FC<CategoryProps> = ({categoryName, desc, apps}) => {
    return <Pane marginY='18px'>
        <Pane>
            <Heading size={800} marginTop='default'>{categoryName}</Heading>
            <Paragraph marginTop="default">{desc}</Paragraph>
        </Pane>
        <CardContainer apps={apps}/>
    </Pane>
}

export default CategoryContainer;

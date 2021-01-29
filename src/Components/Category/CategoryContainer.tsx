import React from "react";
import styled from "styled-components";

import { AppCardProps } from "../Card/AppCard"
import CardContainer from "../CardContainer";

export interface CategoryProps {
    categoryName: string,
    desc: string,
    apps: Array<AppCardProps>,
}

const CategoryHeader = styled.h1`
    font-size: 25px
`;

const CategoryText = styled.p`
    margin-bottom: 15px;
`;

const CategoryContainer: React.FC<CategoryProps> = ({categoryName, desc, apps}) => {
    return <div>
        <CategoryHeader>{categoryName}</CategoryHeader>
        <CategoryText>{desc}</CategoryText>
        {<CardContainer apps={apps}/>}
        {/* {apps.map((app, index) => <AppCard key={index} {...app}/>)} */}
    </div>
}

export default CategoryContainer;

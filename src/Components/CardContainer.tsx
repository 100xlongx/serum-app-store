import React from 'react';
import styled from "styled-components";

import {AppCard, AppCardProps} from "./Card/AppCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

interface CardContainerProps {
    apps: Array<AppCardProps>
}

const CardContainer: React.FC<CardContainerProps> = ({apps}) => {
    return <Container> 
        {apps.map((app, index) => <AppCard key={index} {...app}/>)} 
    </Container>;
}

export default CardContainer;
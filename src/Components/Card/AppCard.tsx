import React, { FC } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import styled from "styled-components";

export interface AppCardProps {
    title: string,
    desc: string,
    launchURL: URL,
}

const StyledCard = styled(Card)`
    height: 250px;
    width: 250px;
`;

const CardImage = styled.img`
    width: 100%;
`;

const AppCard: FC<AppCardProps> = ({title, desc, launchURL}) => {
    return <StyledCard onClick={() => window.location.assign(launchURL.href)} interactive={true} elevation={Elevation.TWO} >
        <h5>{title}</h5>
        <CardImage src='https://via.placeholder.com/150x75.png?text=Placeholder'/>
        <p>{desc}</p>
    </StyledCard>
}

export {AppCard};
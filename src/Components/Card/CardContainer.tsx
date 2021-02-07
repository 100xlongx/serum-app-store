import React from 'react';
import styled from "styled-components";

import { useMediaQuery } from 'react-responsive'

import {AppCard, AppCardProps} from "./AppCard";



interface CardContainerProps {
    apps: Array<AppCardProps>
}



const CardContainer: React.FC<CardContainerProps> = ({apps}) => {
    // const isDesktopOrLaptop = useMediaQuery(
    //     { minDeviceWidth: 1224 },
    //     { deviceWidth: 1600 } // `device` prop
    //  )

    const isDesktop = useMediaQuery({ minWidth: 992 })

    const Container = styled.div`
    display: grid;
    grid-template-columns: ${isDesktop ? '1fr 1fr 1fr 1fr 1fr' : '1fr'};
    grid-column-gap: 1%;
    grid-row-gap: 1%;
    `;

    return <Container> 
        {apps.map((app, index) => <AppCard key={index} {...app}/>)} 
    </Container>;
}

export default CardContainer;
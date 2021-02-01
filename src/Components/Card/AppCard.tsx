import React, { FC } from "react";

import { Card, Heading, Text, Image } from 'evergreen-ui';

import bonfida from '../../img/bonfida.jpg';

export interface AppCardProps {
    title: string,
    desc: string,
    launchURL: URL,
}

const AppCard: FC<AppCardProps> = ({title, desc, launchURL}) => {
    return <Card
    elevation={1}
    hoverElevation={2}
    float="left"
    width='auto'
    height='auto'
    margin={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    background='blueTint'
    onClick={() => window.location.href=launchURL.href}
  >
    <Heading margin='8px'>{title}</Heading>
    {/* <Image width='100%' margin='12px' src='https://via.placeholder.com/250x125.png?text=placeholder'/> */}
    <Image width='100%' src={bonfida}/>
    <Text margin='8px' size={300}>{desc}</Text>
  </Card>
}

export {AppCard};
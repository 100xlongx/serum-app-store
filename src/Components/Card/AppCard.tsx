import React, { FC } from "react";

import { Pane, Heading, Text, Image } from 'evergreen-ui';

import bonfida from '../../img/bonfida.jpg';

export interface AppCardProps {
    title: string,
    desc: string,
    launchURL: URL,
}

const AppCard: FC<AppCardProps> = ({title, desc, launchURL}) => {
    return <Pane
    hoverElevation={2}
    float="left"
    width='auto'
    height='auto'
    margin={18}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    background='#161b19'
    onClick={() => window.location.href=launchURL.href}
    cursor="pointer"
  >
    <Heading color='white' margin='4%'>{title}</Heading>
    {/* <Image width='100%' margin='12px' src='https://via.placeholder.com/250x125.png?text=placeholder'/> */}
    <Image width='100%' src={bonfida}/>
    <Text margin='8px' color='rgb(128, 128, 128)' size={300}>{desc}</Text>
  </Pane>
}

export {AppCard};
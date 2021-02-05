import React, { FC } from "react";

import { Pane, Heading, Text, Image } from 'evergreen-ui';

import { primaryTextColor } from '../Shared/Color';

import SerumLogo from '../../assets/images/serum-logo.png'

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
    <Image margin='5%' width='80%' src={SerumLogo}/>
    <Text margin='8px' color={primaryTextColor} size={300}>{desc}</Text>
  </Pane>
}

export {AppCard};
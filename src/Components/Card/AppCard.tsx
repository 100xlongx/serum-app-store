import React, { FC } from "react";

import { Pane, Heading, Text, Image } from 'evergreen-ui';

import { primaryTextColor } from '../Shared/Color';

import SerumLogo from '../../assets/images/serum-logo.png'

export interface AppCardProps {
    title: string,
    desc: string,
    launchURL: URL,
    image?: string,
}

const AppCard: FC<AppCardProps> = ({title, desc, launchURL, image}) => {
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
    <Heading color='#33a382' margin='4%'>{title}</Heading>
    <Image margin='5%' width='80%' src={image ? image : SerumLogo}/>
    <Text margin='8px' color={primaryTextColor} size={300}>{desc}</Text>
  </Pane>
}

export {AppCard};
import { Pane, Heading, Paragraph } from 'evergreen-ui';
import React from 'react'

const InformationContainer: React.FC = () => {
    return <Pane
    borderRadius={3}
    background='#1e2423'
    paddingX='20px'
    paddingBottom='5px'
    paddingTop= '5px'
    display= "block"
    textAlign='center'
    padding='80px'
    marginY= '18px'>

    <Heading margin-left='auto' size={900} color='white'>Serum: Faster, Cheaper and more Powerful DeFi</Heading>
    <Paragraph>We could probably put links to important information/social media/community related stuff here </Paragraph>
    <Paragraph>Or query for token related data from coingecko API</Paragraph>
    <Paragraph>Or delete this entire box because it's not really that essential</Paragraph>

    </Pane>
}

export default InformationContainer;
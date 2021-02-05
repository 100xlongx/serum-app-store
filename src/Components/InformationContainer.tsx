import { Pane, Heading } from 'evergreen-ui';
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

    <Heading size={900} marginBottom="18px" color='white'>Serum: Faster, Cheaper and more Powerful DeFi</Heading>

    {/* <TwitterContainer/> */}

    </Pane>
}

export default InformationContainer;
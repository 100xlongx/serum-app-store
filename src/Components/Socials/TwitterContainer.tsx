import { Pane } from "evergreen-ui";
import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterContainer: React.FC = () => {
    return <Pane display='flex' marginX='10%' marginBottom='24px' justifyContent='center' alignContent='center'>

    <Timeline
    dataSource={{
        sourceType: 'profile',
        screenName: 'ProjectSerum'
    }}
    options={{
        width: '1200',
        theme: 'dark'
    }}
/>

    </Pane>
}

export default TwitterContainer;
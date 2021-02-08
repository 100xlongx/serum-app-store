import React, { useEffect, useState } from 'react';

import { Pane, Heading } from "evergreen-ui";

import './MediumContainer.css'

import Parser from 'html-react-parser';

import {useMediaQuery} from "react-responsive";

interface MediumPostProps {
    author: string,
    categories: Array<string>,
    content: string,
    description: string,
    enclosure: any,
    guid: string,
    link: string,
    pubDate: string,
    thumbnail: string,
    title: string
}

/*
MediumContainer

This component will fetch the data from the Medium article and map out each article to an individual pane for the user to read.
*/
const MediumContainer: React.FC = () => {

    const mediumURL: string = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@projectserum';
    const [data, setData] = useState<Array<MediumPostProps> | null>([])
    const [isLoading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        fetch(mediumURL)
        .then(res => res.json())
        .then(data => {
            const res = data.items; //This is an array with the content. No feed, no info about author etc..
            const posts = res.filter((item : any)=> item.categories.length > 0);

            setData(posts);
            setLoading(false);
        })
    }, []);

    if (isLoading) {
        return <Heading>Loading Medium Posts....</Heading>
    } else {
        return <Pane>
            {data?.map((post, index) => <MediumPost key={index} {...post}></MediumPost>)}
        </Pane>
    }
}

/*
MediumPost

This container will display the articles received from the Medium API

title: Title of the article
content: The content of the article
link: hyperlink that will direct a user to the actual article itself
*/

const MediumPost: React.FC<MediumPostProps> = ({title, content, link}) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    
    return <Pane 
    textAlign='center'
    borderRadius={3}
    background='#1e2423'
    paddingX='20px'
    paddingBottom='5px'
    textOverflow='ellipsis'
    paddingTop= '5px'
    display= "block"
    padding={isDesktop ? '80px' : '20px'}
    marginY= '18px'
    marginX= {isDesktop ? '20%' : ''}>
        <Heading onClick={() => {window.location.href=link}} cursor="pointer" marginBottom='12px' size={900} color={'#33a382'}>{title}</Heading>
        <div className='paragraph'>{Parser(content)}</div>
    </Pane>
}

export default MediumContainer;
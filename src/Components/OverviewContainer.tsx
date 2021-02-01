import React from 'react';

import CategoryContainer from './Category/CategoryContainer';
import { CategoryProps } from "./Category/CategoryContainer"

import { Pane } from 'evergreen-ui';

const Categories : Array<CategoryProps> = [
    {
        categoryName: "DEX",
        desc: `Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.`,
        apps: [
            {
                title: "Bonfida Serum DEX",
                desc: "All in one platform for data driven crypto traders.",
                launchURL: new URL("https://bonfida.com/dex"),

            },
            {
                title: "Cryptocurrencies.Ai DEX",
                desc: "Lorem ipsum dolor sit amet.",
                launchURL: new URL("https://dex.cryptocurrencies.ai/"),
            },
            {
                title: "Coin98",
                desc: "Lorem ipsum dolor sit amet.",
                launchURL: new URL("https://coin98.app/"),
            }
        ]
    },
    {
        categoryName: "Wallets",
        desc: `Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        apps: [
            {
                title: "Solong",
                desc: "Lorem ipsum dolor sit amet.",
                launchURL: new URL("https://solongwallet.com"),
            },
            {
                title: "Sollet.io",
                desc: "Lorem ipsum dolor sit amet.",
                launchURL: new URL("https://www.sollet.io"),
            },
        ]
    },
    {
        categoryName: "NFT",
        desc: `Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        apps: [
            {
                title: "Solible",
                desc: "Lorem ipsum dolor sit amet.",
                launchURL: new URL("https://solible.com/#/"),
            },
        ]
    },
    
]

const OverviewContainer : React.FC = () => {
    return <Pane marginX='10%' marginY='auto' min-height='100vh'>
        {Categories.map((category, index) => <CategoryContainer key={index} {...category}/>)}
    </Pane>
}

export default OverviewContainer;

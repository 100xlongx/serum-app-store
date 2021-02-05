import React from 'react';

import CategoryContainer from './Category/CategoryContainer';
import { CategoryProps } from "./Category/CategoryContainer"

import { Pane } from 'evergreen-ui';

const Categories : Array<CategoryProps> = [
    {
        categoryName: "Decentralized Exchanges",
        apps: [
            {
                title: "Bonfida Serum DEX",
                desc: "All in one platform for data driven crypto traders.",
                launchURL: new URL("https://bonfida.com/dex"),

            },
            {
                title: "Cryptocurrencies.Ai DEX",
                desc: "Exchange with built-in tools for automation, customization and performance analysis.",
                launchURL: new URL("https://dex.cryptocurrencies.ai/"),
            },
            {
                title: "Project Serum DEX",
                desc: "Lorem ipsum dolor sit amet.",
                launchURL: new URL("https://coin98.app/"),
            }
        ]
    },
    {
        categoryName: "Wallets",
        apps: [
            {
                title: "Solong",
                desc: "Browser extension for managing Solana assets and dapps",
                launchURL: new URL("https://solongwallet.com"),
            },
            {
                title: "Sollet.io",
                desc: "Web based wallet for storing assets.",
                launchURL: new URL("https://www.sollet.io"),
            },
            {
                title: "Solflare",
                desc: "Non-custodial web wallet",
                launchURL: new URL("https://solflare.com/")
            },
            {
                title: "Bonfida Wallet",
                desc: "Web wallet created Bonfida",
                launchURL: new URL("https://bonfida.com/wallet/")
            },
            {
                title: "EzDeFi",
                desc: "Mobile wallet and browser extension.",
                launchURL: new URL("https://ezdefi.com/")
            },
            {
                title: "Coin98",
                desc: "Mobile wallet available on Android and iOS",
                launchURL: new URL("https://coin98.app/")
            }
        ]
    },
    {
        categoryName: "NFT",
        apps: [
            {
                title: "Solible",
                desc: "Marketplace for redeemable NFTs",
                launchURL: new URL("https://solible.com/#/"),
            },
        ]
    },
    {
        categoryName: "AMM",
        apps: [
            {
                title: "Swap",
                desc: "Fully on-chain and noncustodial AMM",
                launchURL: new URL("https://swap.projectserum.com/"),
            },
            {
                title: "SAMM",
                desc: "A constant-product market making bot for Serum",
                launchURL: new URL("https://gitlab.com/OpinionatedGeek/samm"),
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

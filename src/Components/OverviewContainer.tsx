import React from 'react';

import CategoryContainer from './Category/CategoryContainer';
import { CategoryProps } from "./Category/CategoryContainer"

import BonfidaImg from "../assets/images/bonfida.jpg"
import SolflareImg from "../assets/images/solflare.jpg"
import Coin98Img from "../assets/images/coin98.png"
import EzDefiImg from "../assets/images/EzDefi.png"
import SolongImg from "../assets/images/Solong.png"
import AiImg from "../assets/images/ai.png"

import { useMediaQuery } from "react-responsive";

import { Pane } from 'evergreen-ui';

const Categories : Array<CategoryProps> = [
    {
        categoryName: "Decentralized Exchanges",
        apps: [
            {
                title: "Bonfida Serum DEX",
                desc: "All in one platform for data driven crypto traders.",
                launchURL: new URL("https://bonfida.com/dex"),
                image: BonfidaImg,

            },
            {
                title: "Cryptocurrencies.Ai DEX",
                desc: "Exchange with built-in tools for automation, customization and performance analysis.",
                launchURL: new URL("https://dex.cryptocurrencies.ai/"),
                image: AiImg,
            },
            {
                title: "Project Serum DEX",
                desc: "The world's first completely decentralized derivatives exchange with trustless cross-chain trading.",
                launchURL: new URL("https://dex.projectserum.com/"),
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
                image: SolongImg,
            },
            {
                title: "Sollet.io",
                desc: "Web based wallet for storing assets.",
                launchURL: new URL("https://www.sollet.io"),
            },
            {
                title: "Solflare",
                desc: "Non-custodial web wallet",
                launchURL: new URL("https://solflare.com/"),
                image: SolflareImg,
            },
            {
                title: "Bonfida Wallet",
                desc: "Web wallet created by Bonfida",
                launchURL: new URL("https://bonfida.com/wallet/"),
                image: BonfidaImg,
            },
            {
                title: "EzDeFi",
                desc: "Mobile wallet and browser extension.",
                launchURL: new URL("https://ezdefi.com/"),
                image: EzDefiImg,
            },
            {
                title: "Coin98",
                desc: "Mobile wallet available on Android and iOS",
                launchURL: new URL("https://coin98.app/"),
                image: Coin98Img,
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

/*
Component OverviewContainer

A container to display all the categories.
*/
const OverviewContainer : React.FC = () => {
    const isDesktop : boolean = useMediaQuery({ minWidth: 992 })

    return <Pane marginX={isDesktop ? '10%' : ''} marginY='auto' min-height='100vh'>
        {Categories.map((category, index) => <CategoryContainer key={index} {...category}/>)}
    </Pane>
}

export default OverviewContainer;

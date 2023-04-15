import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import { 
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
  } from '@zerodevapp/wagmi/rainbowkit'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
    ConnectButton,
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

function LoginButton() {

    const connectors = connectorsForWallets([
        {
          groupName: 'Social',
          wallets: [
            googleWallet({options: { projectId: "defaultProjectId" }}),
            facebookWallet({options: { projectId: "defaultProjectId" }}),
            githubWallet({options: { projectId: "defaultProjectId" }}),
            discordWallet({options: { projectId: "defaultProjectId" }}),
            twitchWallet({options: { projectId: "defaultProjectId" }}),
            twitterWallet({options: { projectId: "defaultProjectId" }})
          ],
        },
      ]);

    const { chains, provider } = configureChains(
        [mainnet, polygon, optimism, arbitrum],
        [
            alchemyProvider({ apiKey: "" }),
            publicProvider()
        ]
    );

    const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider
    })

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <ConnectButton />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default LoginButton
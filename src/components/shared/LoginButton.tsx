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
            googleWallet({options: { projectId: "87bbae3d-411b-4c4d-b03d-917d21f6b5b7" }}),
            facebookWallet({options: { projectId: "87bbae3d-411b-4c4d-b03d-917d21f6b5b7" }}),
            githubWallet({options: { projectId: "87bbae3d-411b-4c4d-b03d-917d21f6b5b7" }}),
            discordWallet({options: { projectId: "87bbae3d-411b-4c4d-b03d-917d21f6b5b7" }}),
            twitchWallet({options: { projectId: "87bbae3d-411b-4c4d-b03d-917d21f6b5b7" }}),
            twitterWallet({options: { projectId: "87bbae3d-411b-4c4d-b03d-917d21f6b5b7" }})
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
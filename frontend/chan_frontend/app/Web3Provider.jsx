'use client'

import { APP_NAME, CONNECTKIT_THEME } from '@/utils/consts'
import { WagmiConfig, createConfig } from 'wagmi'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { sepolia } from 'wagmi/chains'

const config = createConfig(
	getDefaultConfig({
		appName: APP_NAME,
		walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
		chains: [ sepolia ]
	})
)

const Web3Provider = ({ children }) => (
	<WagmiConfig config={config}>
		<ConnectKitProvider customTheme={CONNECTKIT_THEME}>{children}</ConnectKitProvider>
	</WagmiConfig>
)

export default Web3Provider

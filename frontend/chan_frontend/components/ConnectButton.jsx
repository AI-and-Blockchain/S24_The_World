import { ConnectKitButton } from 'connectkit'
import Button from './Button';
import { formatAddress } from '@/utils/formatting';

export default function ConnectButton() {
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
                return (
                    <Button onClick={show}>
                        {isConnected ? (
                            "Connected to " +
                            formatAddress(address)
                        ) : "Connect Wallet"}
                    </Button>
                );
            }}
        </ConnectKitButton.Custom>
    );
}
import {Card, CardTitle, CardBody} from "./Card";
import ConnectButton from "./ConnectButton";

export default function ConnectWallet() {
    return (
        <Card>
            <CardTitle>Connect Wallet</CardTitle>
            <CardBody>
                <ConnectButton />
            </CardBody>
        </Card>
    )
}
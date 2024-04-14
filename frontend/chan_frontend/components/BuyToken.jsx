import { useState, useEffect } from "react";
import { Card, CardBody, BuyerCardTitle } from "./Card";
import TextInput from "./TextInput";
import Button from "./Button";
import { useAccount, useContractWrite, usePrepareContractWrite, useNetwork} from 'wagmi';
import platformABI from '../contracts/platformABI.json'; 

function BuyToken() {
    const [tokenId, setTokenId] = useState('');
    const [pay, setPay] = useState('');

    const {config} = usePrepareContractWrite({
        address: "0xdE7508cB791ae50EaD175A62bCCDeE54deB94154",
        abi: platformABI.abi,
        functionName: 'buyToken',
        args: [tokenId],
        value: pay,
    });

    const { write: buyToken, error: contractWriteError,isLoading, isError } = useContractWrite(config);

    useEffect(() => {
        if (contractWriteError) {
            console.error('Error when calling contract:', contractWriteError);
        }
        if (isLoading) {
            console.log('Preparing transaction...');
          }
          if (isError) {
            console.log('Error preparing transaction');
          }
    }, [contractWriteError,isLoading, isError]);


    const handleBuyNFT = () => {
        if (!tokenId || !pay) {
            alert('Please enter both Token ID and the amount of payment.');
            return;
        }
        if (buyToken) {
            buyToken();
          } else {
            console.error('Contract write function is not available.');
          }
    };

    return (
        <Card>
            <BuyerCardTitle>Buy NFT</BuyerCardTitle>
            <CardBody>
                <TextInput label="Token ID" value={tokenId} onChange={setTokenId} />
                <TextInput label="Payment Amount (in Wei)" value={pay} onChange={setPay} />
                <Button onClick={handleBuyNFT}>Buy NFT</Button>
            </CardBody>
        </Card>
    );
}

export default BuyToken;
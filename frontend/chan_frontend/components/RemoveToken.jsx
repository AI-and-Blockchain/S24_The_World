import { useState, useEffect } from "react";
import { Card, CardBody, SellerCardTitle } from "./Card";
import TextInput from "./TextInput";
import Button from "./Button";
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import platformABI from '../contracts/platformABI.json';

function RemoveToken() {
  const [tokenId, setTokenId] = useState('');
  const [pay, setPay] = useState('');
  const [error, setError] = useState('');

  // Prepare the contract write operation
  const { config } = usePrepareContractWrite({
    address: "0x3A991f48D5c95AA958A22800B25B2Cd29960435A",
    abi: platformABI.abi,
    functionName: 'removeToken',
    args: [tokenId],
    value: pay,
  });

  // Execute the contract write operation
  const { write: removeToken, error: contractWriteError, isLoading, isError } = useContractWrite(config);

  // Handle loading and error states
  useEffect(() => {
    if (contractWriteError) {
      console.error('Error when calling contract:', contractWriteError);
      setError('Failed to remove token. Please check console for details.');
    }
    if (isLoading) {
      console.log('Preparing transaction...');
    }
    if (isError) {
      console.log('Error preparing transaction');
      setError('Error during transaction preparation.');
    }
  }, [contractWriteError, isLoading, isError]);

  const handleRemoveToken = () => {
    if (!tokenId) {
      alert('Please enter a token ID.');
      return;
    }
    if (removeToken) {
      removeToken();
    } else {
      console.error('Contract write function is not available.');
    }
  };

  return (
    <Card>
      <SellerCardTitle>Remove NFT Listing</SellerCardTitle>
      <CardBody>
        <TextInput label="Token ID" value={tokenId} onChange={setTokenId} />
        <TextInput label="Return reward (in Wei)" value={pay} onChange={setPay} />
        <Button onClick={handleRemoveToken}>Remove Listing</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </CardBody>
    </Card>
  );
}

export default RemoveToken;

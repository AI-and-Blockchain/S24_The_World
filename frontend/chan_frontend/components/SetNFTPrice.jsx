import { useState, useEffect} from "react";
import { Card, CardBody, SellerCardTitle } from "./Card";
import TextInput from "./TextInput";
import Button from "./Button";
import { useAccount, useContractWrite, usePrepareContractWrite, useSwitchNetwork, useNetwork } from 'wagmi';
import platformABI from '../contracts/platformABI.json';

function SetNFTPrice() {
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // const [imageUrl, setImageUrl] = useState(localStorage.getItem('uploadedImageUrl') || '');
  
    const { config } = usePrepareContractWrite({
      address: "0x3A991f48D5c95AA958A22800B25B2Cd29960435A",
      abi: platformABI.abi,
      functionName: 'createAndListToken',
      args: [imageUrl, price],
    });
  
    const { write: createAndListToken, error: contractWriteError, isLoading, isError  } = useContractWrite(config);
  
    // 监听错误
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
    }, [contractWriteError,isLoading,isError]);
  
    const handleCreateNFT = () => {
      if (!imageUrl) {
        alert('Invalid URL! Please upload a valid photo first.');
        return;
      }
      if (!price) {
        alert('Please enter a price.');
        return;
      }
      if (createAndListToken) {
        createAndListToken();
      } else {
        console.error('Contract write function is not available.');
      }
    };
  
    return (
      <Card>
        <SellerCardTitle>Set NFT Price</SellerCardTitle>
        <CardBody>
          <TextInput label="Image URL" value={imageUrl} onChange={setImageUrl} />
          <TextInput label="Enter Price" value={price} onChange={setPrice} />
          <Button onClick={handleCreateNFT}>Create NFT</Button>
        </CardBody>
      </Card>
    );
  }
  
  export default SetNFTPrice;

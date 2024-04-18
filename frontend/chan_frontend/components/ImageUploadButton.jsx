import { useState } from "react";
import { Card, CardBody, SellerCardTitle } from "./Card";
import TextInput from "./TextInput";
import Button from "./Button";
import { useAccount } from 'wagmi'

function ImageUploadButton() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('please chose one photo');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    setUploadStatus('uploading...');
    try {
      const response = await fetch('http://127.0.0.1:5000/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setImageUrl(result.url);
        setUploadStatus('upload suceess!');
      } else {
        console.log(result);
        setUploadStatus(`upload faild: ${result.message}`);
      }
    }
    catch (error) {
      console.error("upload error:");
      console.error(error);
      setUploadStatus(`upload error: ${error.message}`);
    }
  };

  return (
    <Card>
      <SellerCardTitle>upload photo</SellerCardTitle>
      <CardBody>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <Button onClick={handleUpload}>upload photo</Button>
        {uploadStatus && <p>{uploadStatus}</p>}
        {imageUrl && (
          <div>
            <p>photo URL: </p>
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a>
          </div>
        )}
      </CardBody>
    </Card>
  );

}

export default ImageUploadButton;

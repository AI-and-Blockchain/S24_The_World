'use client'

import { useModal } from "connectkit"
import { useAccount, useDisconnect } from "wagmi"
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import { useState } from "react";
//import FormComponent from "@/components/FormComponent";



export default function Home() {
  const { address, isConnected } = useAccount();
  const [photoID, setPhotoID] = useState<number>(-1);

  function FormComponent() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
    const handleSave = () => {
      try {
        // Convert value to a number before setting it as the state value for photoID
        setPhotoID(Number(inputValue));
        return photoID; // Return the updated photoID value
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter Photo ID"
        />
        <button onClick={handleSave}>Save</button>
        <p>Saved Photo ID: {photoID}</p>
      </div>
    );
  }

  const [photoPrice] = useState<number>(0);
  // TODO: Implement the logic to get the price of the photo ID

  return (
    <main>
      <Link href="/"> Home </Link>
      <div className={styles.main}>
        <h1>Welcome to the client page</h1>
        {isConnected && <p> Client address is {address} </p>}
        <p>Price for ID: {photoID} is {photoPrice}</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FormComponent />
        </div>
      </div>
    </main>
  );
}

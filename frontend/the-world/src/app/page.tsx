'use client'

import { useModal } from "connectkit"
import { useAccount, useDisconnect } from "wagmi"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const { isConnected, address, isConnecting } = useAccount();
  const { setOpen } = useModal();
  const { disconnect } = useDisconnect();

  if (isConnecting) {
    return <div>Connecting...</div>;
  }
  return (
    <main className={styles.main}>
      <div>
        {isConnected ? (
          <div>
            <div>Connected with address: {address}</div>
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        ) : (
          <button style={{
            border: 'none',
            color: 'white',
            padding: '20px 40px', // Increase padding to make the button larger
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '12px'
          }} onClick={() => setOpen(true)}>Connect</button>
        )}
      </div>
    </main>
  );
}

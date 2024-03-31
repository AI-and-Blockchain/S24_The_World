'use client'

import { useModal } from "connectkit"
import { useAccount, useDisconnect } from "wagmi"
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
  const { address, isConnected } = useAccount();
  return (
    <main>
      <Link href="/" > Home </Link>
      <div className={styles.main}>
        <h1>Welcome to the client page</h1>
        {isConnected && <p> Client address is {address} </p>}
      </div>
    </main>
  );
}

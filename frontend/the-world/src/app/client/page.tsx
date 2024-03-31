'use client'

import { useModal } from "connectkit"
import { useAccount, useDisconnect } from "wagmi"
import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
  const { address } = useAccount();
  return (
    <main className={styles.main}>
      <h1>Welcome to the client page</h1>
      <p> Client address is {address} </p>
    </main>
  );
}

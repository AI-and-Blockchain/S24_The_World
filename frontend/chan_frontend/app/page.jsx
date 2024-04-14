"use client";

import ConnectWallet from '@/components/ConnectWallet';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import SwitchNetwork from '@/components/SwitchNetwork';
import ImageUploadButton from '@/components/ImageUploadButton';
import SetNFTPrice from '@/components/SetNFTPrice';
import BuyToken from '@/components/BuyToken';

export default function Home() {
  const { address } = useAccount();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      {
        address && !loading && (
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <div className="grid grid-cols-2 items-center justify-center p-4 bg-red-400">
                <h1 className="text-4xl font-bold">
                  Seller Interface
                </h1>
                <div>
                  <SwitchNetwork target="eth"/>
                </div>

              </div>
              <div className="grid grid-cols-2 gap-2 m-2">
                <ImageUploadButton/>
                <SetNFTPrice/>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 items-center justify-center p-4 bg-blue-400">
                <h1 className="text-4xl font-bold">
                  Buyer Interface
                </h1>
                <div>
                  <SwitchNetwork target="eth"/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 m-2">
                <BuyToken/>
              </div>
            </div>
          </div>
        )
      }
      <div className='grid grid-cols-1 gap-4 m-4'>
        <ConnectWallet />
      </div>
    </>
  )
}

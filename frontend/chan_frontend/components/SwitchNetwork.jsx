import Button from "./Button";
import { bscTestnet, sepolia } from 'wagmi/chains'
import { useAccount, useContractWrite, usePrepareContractWrite, useSwitchNetwork, useNetwork } from 'wagmi';

const SwitchNetwork = ({ target }) => {
  const { chain } = useNetwork()

  return (
    <div className="flex flex-col items-center justify-center">
      <h3>
        Current Network: {chain.name}
      </h3>
    </div>
  )
}

export default SwitchNetwork;

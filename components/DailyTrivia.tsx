import { useWeb3Context } from "../context/Web3Context";

export function DailyTrivia() {
  const { address } = useWeb3Context();
  //   console.log(address);
  //   const contractAddress = "0x437eF217203452317C3C955Cf282b1eE5F6aaF72";
  //   const data = useContract("0x437eF217203452317C3C955Cf282b1eE5F6aaF72");
  //   const { data: balance, isLoading, error } = useTokenSupply(contract);

  //   console.log(data);
  // const connectUsingMetamask = useMetamask();
  return address ? <div>Conectado</div> : null;
}

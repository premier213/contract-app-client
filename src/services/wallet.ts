import { ethers } from 'ethers';
import { useQuery } from 'react-query';

export async function connect() {
  try {
    const connectWallet = await ethereum.request({
      method: 'eth_requestAccounts'
    });

    return connectWallet;
  } catch (error) {
    console.log(error);
  }

  return '';
}
export async function address() {
  if (ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const getAddress = await signer.getAddress();

      return getAddress;
    } catch {
      return '';
    }
  }

  return '';
}
export function useConnect() {
  const { data, refetch } = useQuery('connect-wallet', connect, {
    enabled: false
  });

  return { data, refetch };
}
export function useAddress() {
  const { data, refetch } = useQuery('show-address', address, {
    enabled: false
  });

  return { data, refetch };
}

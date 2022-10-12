import Web3 from 'web3/dist/web3.min.js';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { nftabi, nftaddress } from './ABI';


const provider = new WalletConnectProvider({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    rpc: {
          56: 'https://bsc-dataseed1.ninicoin.io',
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
          1: 'https://mainnet.infura.io/v3/',
          // ...
        },
  });
  
  let web3 = null;
  let externalweb3 = null;
  
  export const WalletConnectlogin = async () => {
    try {
      const data = await provider.enable();
      web3 = new Web3(provider)
      externalweb3 = provider
    } catch (error) {
      console.log(error)
    }
  }
  
  export const webProvide =()=>{
    return externalweb3;
  }
  
  
  export const webinternal =()=>{
    return web3;
  }
  
  
  export const Metalogin = async()=> {
      web3 = new Web3(window.ethereum)
      externalweb3 = window.ethereum;
      console.log(web3)
      const data = await window.ethereum.enable();
      return data[0];
  }
  
  export const DissconnectWallet = async () => {
    await provider.disconnect()
    web3 = null
  }
  
  export const getUserAddress = async()=> {
      try {
          const address = await web3.eth.getAccounts();
          return address[0]
      } catch (error) {
          // console.log(error)
      }
  }
  
  export const getContract = async(abi, address)=> {
      try {
          const Contract = new web3.eth.Contract(abi, address)
          return Contract
      } catch (error) {
          // console.log(error)
      }
  }
  
  
  export const towie = async(amount)=> {
      try {
          const number = await web3.utils.toWei(amount.toString(), 'ether');
          return number
      } catch (error) {
          // console.log(error)
      }
  }
  
  
  export const GetChainId = async()=>{
     try {
      const id = await web3.eth.getChainId();
      return id;
     } catch (error) {
      // console.log(error)
     }
  }



  /// NFT CONTRACT METHODS////
    /// NFT CONTRACT METHODS////
      /// NFT CONTRACT METHODS////
        /// NFT CONTRACT METHODS////



  export const batchmintforpublic = async(id)=>{
    try {
      const a = await towie(0.01*id.length)
      console.log(id)
      const contract = new web3.eth.Contract(nftabi, nftaddress);
      const data = await contract.methods.batchmintPublic(await getUserAddress(),id).send({from :await getUserAddress(),value:a});
      return data;
    } catch (error) {
      // console.log(error)
    }
  }
  export const mintforpublic = async(id)=>{
    try {
      const a = await towie(0.01)
      const contract = new web3.eth.Contract(nftabi, nftaddress);
      const data = await contract.methods.mintPublic(await getUserAddress(),id).send({from :await getUserAddress(),value:a});
      return data;
    } catch (error) {
      // console.log(error)
    }
  }
  
  export const batchmintforadmin = async(id)=>{
    try {
      const a = await towie(0.041*id.length)
      console.log(id)
      const contract = new web3.eth.Contract(nftabi, nftaddress);
      const data = await contract.methods.batchmintByOwner(await getUserAddress(),id).send({from :await getUserAddress()});
      return data;
    } catch (error) {
      // console.log(error)
    }
  }
  
  
  export const ETHrecover = async()=>{
    try {
      const contract = new web3.eth.Contract(nftabi, nftaddress);
      const data = await contract.methods.recoverETH().send({from :await getUserAddress()});
      return data;
    } catch (error) {
      // console.log(error)
    }
  }
  
  export const getAdminNFT = async()=>{
    try {
        const contract = new web3.eth.Contract(nftabi, nftaddress);
        const data = await contract.methods._owner().call();
        return data;
    } catch (error) {
        // console.log(error)
    }
  }
  

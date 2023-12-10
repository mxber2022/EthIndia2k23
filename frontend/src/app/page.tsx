"use client"

import { useContext, useEffect } from 'react';
import  WakuNodeCAPI  from '@/context/WakuNodeRunContextApi';
import { ethers } from 'ethers';
import { Cabi } from './components/ContentABI';

export default function Home() {
  
  const  myWakuNode  = useContext(WakuNodeCAPI);

  if(myWakuNode?.myWakuNode){
    console.log("myWakuNode: ", myWakuNode);
    //  sendData(myWakuNode?.myWakuNode, myData);
    //  subscribeIncomingData(myWakuNode?.myWakuNode);
    //  getStoreData(myWakuNode?.myWakuNode);
  }
  
  console.log("home");

  async function test () {

    try {
      const NFT_ContractAdress_Mantle = "0x5208f311D56422153E7B221589B25889e556840d";
      const MantleProvider = new ethers.providers.JsonRpcProvider("https://rpc.testnet.mantle.xyz");
      const CONTRACT = new ethers.Contract(NFT_ContractAdress_Mantle, Cabi, MantleProvider);

      let TOTALSUPPLY = await CONTRACT.totalSupply();
      console.log("TOTALSUPPLY", TOTALSUPPLY);
    }
    catch(e) {
        console.log("error: ", e);
    }
  }
  test()

  return (
    <>
      
    </>
  )
}

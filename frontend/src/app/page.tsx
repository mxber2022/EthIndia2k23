"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { createNode, sendData, subscribeIncomingData, receiveData, getStoreData } from './components/WakuSetup';
import { useWaku } from "@waku/react";
import { useContext, useEffect } from 'react';
import { LightNode } from "@waku/sdk";
import  WakuNodeCAPI  from '@/context/WakuNodeRunContextApi';

interface incomingMsg {
  name: string;
}

const myData: incomingMsg = { name: "hello babu" };

export default function Home() {
  
  const  myWakuNode  = useContext(WakuNodeCAPI);

  if(myWakuNode?.myWakuNode){
    console.log("myWakuNode: ", myWakuNode);
  //  sendData(myWakuNode?.myWakuNode, myData);
    //subscribeIncomingData(myWakuNode?.myWakuNode);
    getStoreData(myWakuNode?.myWakuNode);
  }
  
  console.log("hellp");

  return (
    <>
      hello
      {/* <button onClick={()=> sendData(node, data)}> Send Data</button>     */}
 
    </>
  )
}

"use client"
import { useAccount, useConnect, useEnsName } from 'wagmi'
import  WakuNodeCAPI  from '@/context/WakuNodeRunContextApi';
import { useContext, useEffect } from 'react';

function about () {
    const { address, isConnected } = useAccount();

    console.log("address: ", address);
    console.log("isConnected: ", isConnected);

    return(
        <>
            <p>About Page </p> 
           
        </>
    )
}

export default about;
'use client'

import { createLightNode, waitForRemotePeer, LightNode } from "@waku/sdk";
import React from "react";
import WakuNodeCAPI from "./WakuNodeRunContextApi";

const WakuNodeProvider = ({ children }: { children: React.ReactNode }) => {
    const [myWakuNode, setMyWakuNode] = React.useState<LightNode | undefined>();

    async function create() {
        const node = await createLightNode({
            defaultBootstrap: true
        });
        await node.start();
        await waitForRemotePeer(node);
        return node;
    }

    React.useEffect(() => {

        create().then((temp) => {
            setMyWakuNode(temp);
        });
        
        return ()=> {
            // create().then((temp) => {
            //     setMyWakuNode(temp);
            // });
        }

    }, []);

    return (
        <WakuNodeCAPI.Provider value={{ myWakuNode }}>
            {children}
        </WakuNodeCAPI.Provider>
    );
};

export default WakuNodeProvider;


/* 
    My code

    const WakuNodeProvider = ({ children } : { children: React.ReactNode }) => {
    
    const [myWakuNode, setMyWakuNode] = React.useState<LightNode>();
    
    async function create() {
        const node = await createLightNode({
            defaultBootstrap: true
        });
        await node.start();
        await waitForRemotePeer(node);
        return node;
    }

    create().then((temp) => {
        console.log("temp: ", temp);
        setMyWakuNode(temp);
    })

    
    return(
        <WakuNodeCAPI.Provider value= {{myWakuNode, setMyWakuNode}}>
            { children }
        </WakuNodeCAPI.Provider>
    )
}   

export default WakuNodeProvider;

*/
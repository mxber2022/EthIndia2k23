'use client'

// import React from "react";
// import { createLightNode, waitForRemotePeer, LightNode } from "@waku/sdk";

// async function create() {
//     const node = await createLightNode({
//         defaultBootstrap: true
//     });
//     await node.start();
//     await waitForRemotePeer(node);
//     return node;
// }
// let tempNode;

// create().then((temp) => {
//     tempNode = temp;
//     console.log("tempMynode: ", temp);
// })


// const WakuNodeCAPI = React.createContext(tempNode);


// export default WakuNodeCAPI;

import React from "react";
import { LightNode } from "@waku/sdk";

interface WakuNodeContextProps {
    myWakuNode: LightNode | undefined;
}

const WakuNodeCAPI = React.createContext<WakuNodeContextProps | undefined>(undefined);

export default WakuNodeCAPI;

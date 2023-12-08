"use client"
import { useWaku } from "@waku/react";
import { DecodedMessage, LightNode, createDecoder, createEncoder, createLightNode, waitForRemotePeer } from "@waku/sdk";
import protobuf from "protobufjs";

const contentTopic = "/hellowakuberlin/0";
const encoder = createEncoder({ contentTopic });
const decoder = createDecoder(contentTopic);

interface incomingMsg {
    Title: string,
    Image: string,
    Content: string
}

const incomingMsgBuf = new protobuf.Type("incomingMsg")
.add(new protobuf.Field("id", 1,"string"))
.add(new protobuf.Field("Title", 2, "string"))
.add(new protobuf.Field("Image", 3, "string"))
.add(new protobuf.Field("Content", 4, "string"))

/* 
    Start node
*/

export const createNode = async () => {
    const node = await createLightNode({
        defaultBootstrap: true
    });
    await node.start();
    await waitForRemotePeer(node);
    return node;
}


/* 
    Subscribe to incoming data
*/

//const { node, error, isLoading } = useWaku();

export const subscribeIncomingData = async (node: LightNode) => {

    const _callback = (incomingMsg: DecodedMessage) => {
        if(!incomingMsg.payload) return;
        const incomingMsgObj = incomingMsgBuf.decode(incomingMsg.payload);
        console.log("Decoded Message is: ", incomingMsgObj);
    }
    const subscription = await node?.filter?.createSubscription();
    await subscription.subscribe([decoder], _callback);
}

/* 
    send data to network
*/

export const sendData = async (node: LightNode, ourData: incomingMsg) => {
    const protoMessage = incomingMsgBuf.create(ourData);
    const serialisedMessage = incomingMsgBuf.encode(protoMessage).finish();
    await node?.lightPush?.send(encoder, {
        payload: serialisedMessage,
    })
}

/* 
    receive data from network
*/

export const receiveData = (dataReceived: incomingMsg) => {
    console.log("dataReceived: ", dataReceived);
}   
import { ethers } from 'ethers'
import { Cabi } from './ContentABI'
import { abi } from './GovernorABI'

export const propose = async (args: any[], functionToCall: string, proposalDescription: string) => {
    console.log("Starting proposeTx 1");
    const GovernanceContract = "0x84239B1fDB29d493CAd65BecC55caCcfb8F144B4";
    const ContentContract = "0x5208f311D56422153E7B221589B25889e556840d";
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.testnet.mantle.xyz");
    const signer = new ethers.Wallet("d2ab6e77539c6d2ba90f19b217e26e4fad301e5066445514b4b63cba0fc80b6c", provider);
    console.log("Signer: ", signer);
    const GovCon = new ethers.Contract(GovernanceContract, abi, signer);
    const ContentCon = new ethers.Contract(ContentContract, Cabi, signer);

    const encodedFunctionCall = ContentCon.interface.encodeFunctionData(
        functionToCall, args
    );
    console.log("encodedFunctionCall: ", encodedFunctionCall);
    console.log("ContentCon.address: ", ContentCon.address);
    console.log("encodedFunctionCall: ", encodedFunctionCall);
    console.log("proposalDescription: ", proposalDescription);

    try{
        const proposeTx = await GovCon.propose(
            [ContentCon.address],
            [0],
            [encodedFunctionCall],
            proposalDescription
        );
        
        console.log("proposeTx: ", proposeTx);
    }

    catch(e) {
        console.log("error found: ", e);
    }
    
}   
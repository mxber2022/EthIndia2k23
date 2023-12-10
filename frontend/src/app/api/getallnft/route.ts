import {NextRequest, NextResponse} from "next/server";
import { ethers } from "ethers";
import { Cabi } from '../../components/ContentABI';



export async function GET (request: NextRequest) {

    try {
        const NFT_ContractAdress_Mantle = "0x629Fb566FD8f318d6c5E2559f55C80Dbb73F92E3";
        const MantleProvider = new ethers.providers.JsonRpcProvider("https://rpc.testnet.mantle.xyz");
        const CONTRACT = new ethers.Contract(NFT_ContractAdress_Mantle, Cabi, MantleProvider);

        let TOTALSUPPLY = await CONTRACT.balanceOf("0x5208f311D56422153E7B221589B25889e556840d");
        console.log("TOTALSUPPLY", TOTALSUPPLY);
    }
    catch(e) {
        console.log("error: ", e);
    }


    return new NextResponse(
        JSON.stringify({ success: true, message: "hello" })
    );
}
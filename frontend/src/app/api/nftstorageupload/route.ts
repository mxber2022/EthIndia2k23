import {NextRequest, NextResponse} from "next/server";
import { NFTStorage } from 'nft.storage'

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVGYzA0NTUyMzI5ODA5NDI4NDkzY0VDYjdmZkY4RkUxNGY5YkQzOTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4OTk2NjA0NzY5NiwibmFtZSI6IlBhcmlzIn0.9CxIio0ygPmcf8onnQcFrZurTQACHiB8qOgO6tcHEWs";

async function getExampleImage(imageuri: string) {
    const imageOriginUrl = imageuri;
    const r = await fetch(imageOriginUrl)
    if (!r.ok) {
      throw new Error(`error fetching image: ${r.status}`)
    }
    return r.blob()
}

export async function POST (request: NextRequest) {

    try{
        const body = await request.json();
        console.log("data: ", body);
    }
    catch(e) {
        console.log("error: ", e);
    }

    
    const image = await getExampleImage("https://metadata.degods.com/g/8732-s3-male.png");

    const nft = {
        image,
        name: "Storing the World's Most Valuable Virtual Assets with NFT.Storage",
        description: "The metaverse is here. Where is it all being stored?",
    } 
    const client = new NFTStorage({ token: API_KEY });
    const metadata = await client.store(nft)
    console.log('NFT data stored!')
    console.log('Metadata URI: ', metadata.url)

    return new NextResponse(
        JSON.stringify({ success: true, message: metadata.url })
    );
}
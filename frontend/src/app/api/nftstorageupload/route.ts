import {NextRequest, NextResponse} from "next/server";
import { NFTStorage } from 'nft.storage'

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVGYzA0NTUyMzI5ODA5NDI4NDkzY0VDYjdmZkY4RkUxNGY5YkQzOTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4OTk2NjA0NzY5NiwibmFtZSI6IlBhcmlzIn0.9CxIio0ygPmcf8onnQcFrZurTQACHiB8qOgO6tcHEWs";

async function getExampleImage() {
    const imageOriginUrl = "https://user-images.githubusercontent.com/87873179/144324736-3f09a98e-f5aa-4199-a874-13583bf31951.jpg"
    const r = await fetch(imageOriginUrl)
    if (!r.ok) {
      throw new Error(`error fetching image: ${r.status}`)
    }
    return r.blob()
}

export async function GET (request: NextRequest) {
    const image = await getExampleImage();

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
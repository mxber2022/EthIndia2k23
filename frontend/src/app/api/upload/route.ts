import {NextRequest, NextResponse} from "next/server";
import fs from 'fs/promises';
import lighthouse from '@lighthouse-web3/sdk';

export async function GET (request: NextRequest) {

    const meta = {
        name: 'EthIndia',
        description: 'A description of my NFThgh',
        image: 'IMAGE_URLhh',
    };

    const jsonString = JSON.stringify(meta);
    const tempFilePath = 'temp-metadata.json';
    await fs.writeFile(tempFilePath, jsonString);

    const metadataResponse = await lighthouse.upload(
        tempFilePath,
        '0d7fb79e.c44093faf73940988319423718c4e4a6'
      );
  
    console.log('Metadata uploaded to IPFS via Lighthouse:', metadataResponse);
   // await fs.unlink(tempFilePath);

    return new NextResponse(
        JSON.stringify({ success: false, message: metadataResponse })
    );
}
"use client"
import { useAccount, useConnect, useEnsName } from 'wagmi'
import  WakuNodeCAPI  from '@/context/WakuNodeRunContextApi';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createNode, sendData, subscribeIncomingData, receiveData } from '../components/WakuSetup'

interface Data {
    Title: string;
    Image: string;
    Content: string;
}

function publish () {
    const { address, isConnected } = useAccount();
    const  myWakuNode  = useContext(WakuNodeCAPI);

    const [formData, setFormData] = useState<Data>({
        Title: '',
        Image: '',
        Content: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //onSubmit(formData);
        console.log(formData); 

        if(myWakuNode?.myWakuNode){
            console.log("myWakuNode: ", myWakuNode);
            sendData(myWakuNode?.myWakuNode, formData);
            await subscribeIncomingData(myWakuNode?.myWakuNode);
        }
        else {
            console.log("Waku node error");
        }
    };

    return(
        <>
            <div className='bg-mine mx-96 rounded-md font-chiliz my-8 text-center min-w-fit'>
                <div className='p-7'>
                    <h1 className='text-chilizColor text-3xl font-bold'>Publish your content here !</h1>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className='text-xl'>
                        <label htmlFor="Title">Title:</label>
                        <input className='border border-black rounded-md p-2' type="text" id="Title" name="Title" value={formData.Title} onChange={handleInputChange} required />
                    </div>

                    <div className='text-xl my-3'>
                        <label htmlFor="Image">Image URL:</label>
                        <input className='border border-black rounded-md p-2' type="text" id="Image" name="Image" value={formData.Image} onChange={handleInputChange} required />
                    </div>


                    <div className='text-xl flex items-center justify-center'>
                        <label htmlFor="Content">Content:</label>
                        <textarea className='w-96 border border-black rounded-md p-2' id="Content" name="Content" value={formData.Content} onChange={handleInputChange} required />
                    </div>
          
                    <button className='text-xl my-3 hover:text-chilizColor' type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default publish;
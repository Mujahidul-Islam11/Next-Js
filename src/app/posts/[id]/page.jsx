import { postDetails } from '@/services/getPostDetails';
import React from 'react';

export const generateMetadata = async({params}) => {
    const data = await postDetails(params.id);

    return {
        title: `${data.title} details page`,
        description: `${data.body}`
    }
}
const page = async({params}) => {
const data = await postDetails(params.id);

    return (
        <div className='container mx-auto my-20 rounded-md'>
            <div key={data?.id} className="border p-3">
            <h3 className="text-5xl mb-4 font-bold">{data?.title}</h3>
            <h3 className="text-2xl">{data?.body}</h3>
            <div className="flex justify-center mt-6">
            </div>
          </div>
        </div>
    );
};

export default page;
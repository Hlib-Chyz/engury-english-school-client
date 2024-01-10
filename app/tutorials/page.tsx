import { axiosInstance } from "app/axios";
import Link from "next/link";
import { use } from "react";
import { AppRoutes } from "types/app-routes.types";
import { ITutorial } from "types/tutorial.types";

const getTutorials = async (): Promise<ITutorial[]> => {
  const data = await axiosInstance.get(`tutorials`, {
    headers: {
      cache: "force-cache",
    },
  });
  return data.data;
};

export default function Tutorials() {
  const tutorials = use(getTutorials());
  return (
    <div className='flex-col'>
      <div className='flex justify-center'>
        <h1 className='pb-10 mb-5 mt-20 border-b-2 border-b-black-500 border-b-solid border-w-2 inline-block text-center'>
          TUTORIALS
        </h1>
      </div>
      <div className='flex justify-center'>
        <ul>
          {tutorials.map((tutorial, index) => (
            <li key={tutorial.title} className='flex max-w-4xl'>
              <div className='flex flex-col items-center mr-4'>
                <div className='text-7xl text-red-300 font-bold'>
                  {tutorial.date}
                </div>
                <div className='mt-2 text-lg'>{tutorial.date}</div>
              </div>
              <div className='flex flex-col items-center mr-20'>
                {index === 0 ? (
                  <div className='h-8'></div>
                ) : (
                  <div className='w-0.5 h-8 bg-gray-300'></div>
                )}
                <div className='w-2.5 h-2.5 bg-red-300 rounded-full'></div>
                {index === tutorials.length - 1 ? null : (
                  <div className='w-0.5 h-full bg-gray-300'></div>
                )}
              </div>
              <div>
                <h2 className='text-5xl'>{tutorial.title}</h2>
                <h4 className='text-lg text-gray-500 mt-8 mb-16'>
                  {tutorial.shortDescription}
                </h4>
                <p className='text-xl leading-10 mb-16'>
                  {tutorial.description}
                </p>
                <Link
                  href={`/${AppRoutes.Tutorials}/${tutorial.id}`}
                  className='bg-red-400 py-4 px-16 text-white block mb-24 inline-block'
                >
                  READ ON
                </Link>
                {index === tutorials.length - 1 ? null : (
                  <div className='mb-12 w-20 h-1 bg-gray-300 mx-auto'></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

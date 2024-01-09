import { instance } from "app/page";
import { use } from "react";
import { ITutorial, TextType } from "types/tutorial.types";

const getTutorialInfo = async (id: string): Promise<ITutorial["text"]> => {
  const data = await instance.get(`tutorials/${id}`, {
    headers: {
      cache: "force-cache",
    },
  });
  return data.data;
};

function Tutorial({ params }: { params: { id: string } }) {
  const tutorial = use(getTutorialInfo(params.id));
  return (
    <div className='flex-col max-w-5xl mx-auto my-20'>
      {tutorial.map((it) => {
        switch (it.type) {
          case TextType.Title:
            return <h1 className='text-7xl mb-2'>{it.text}</h1>;
          case TextType.ShortDescription:
            return <p className='text-2xl text-gray-300 mb-6'>{it.text}</p>;
          case TextType.Text:
            return <p className='text-2xl mb-9'>{it.text}</p>;
          case TextType.SubTitle:
            return <p className='text-4xl mb-9'>{it.text}</p>;
          default:
            return <></>;
        }
      })}
    </div>
  );
}

export const generateStaticParams = async () => {
  const data = await instance.get(`tutorials`, {
    headers: {
      cache: "force-cache",
    },
  });
  return (data.data as ITutorial[]).map((it) => ({
    id: it.id,
  }));
};

export default Tutorial;

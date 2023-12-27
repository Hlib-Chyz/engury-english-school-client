"use client";
import { useState } from "react";
import { ICourseInfo } from "types/course.types";

export default function QuestionsYouMightHave({
  questionsYouMightHave,
}: {
  questionsYouMightHave: ICourseInfo["questionsYouMightHave"];
}) {
  const [data, setData] = useState(questionsYouMightHave);
  const setQuestionsYouMightHave = (
    section: ICourseInfo["questionsYouMightHave"][0]
  ) => {
    setData(
      data.map((que) => ({
        ...que,
        showText: que.title === section.title ? !que.showText : que.showText,
      }))
    );
  };

  return (
    <section className='py-16 text-center'>
      <h2 className='text-6xl text-blue-900 font-bold mb-2'>
        Questions You Might Have
      </h2>
      <p className='text-5xl text-blue-500 mb-6'>
        And my honest answers to them
      </p>
      <ul className='flex inline-flex flex-col gap-4 max-w-4xl'>
        {data.map((it) => (
          <li key={it.title} className='bg-blue-100 flex flex-col rounded-xl'>
            <button
              onClick={() => setQuestionsYouMightHave(it)}
              className='p-8 flex'
            >
              <div className='text-5xl text-blue-900 ml-4'>Arrow</div>
              <div className='text-5xl text-blue-900 ml-4'>{it.title}</div>
            </button>
            {it.showText ? (
              <div className='p-8 text-2xl'>{it.text}</div>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

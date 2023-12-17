"use client";
import Link from "next/link";
import { useState } from "react";
import { AppRoutes } from "types/app-routes";

export default function NativeSpeackirizm() {
  const [courseSections, setCourseSections] = useState([
    { name: "Grammar", subSections: ["1", "2", "3"], isExpanded: false },
    { name: "Speaking", subSections: ["1", "2", "3"], isExpanded: false },
    { name: "Reading", subSections: ["1", "2", "3"], isExpanded: false },
  ]);
  const roadByCourse = [
    `At the end of the course, you will be able to write and debug tests
  with a full and in-depth understanding of what you are doing and how
  things are working.`,
    `At the end of the course, you will be able to write and debug tests
  with a full andin-depth understanding of what you are doing and how
  things are working.`,
    `Explore 53 engaging videos (≈ 7 hours in total), all focused on
  Angular testing. These are expertly crafted by a Google Developer
  Expert in Angular and a Microsoft MVP in Developer Technologies`,
  ];
  const expandSubSectionsOfSection = (section: {
    name: string;
    subSections: string[];
    isExpanded: boolean;
  }) => {
    setCourseSections(
      courseSections.map((it) =>
        section.name === it.name ? { ...it, isExpanded: !it.isExpanded } : it
      )
    );
  };
  return (
    <div>
      <section className='my-32 flex items-center'>
        <div className='w-1/2 mr-8'>
          <h2 className='text-5xl mb-2 font-bold'>Native Speackirizm</h2>
          <p className='mb-8 font-bold text-base'>
            Testing in Angular is much easier than you think
          </p>
          <a
            href='https://web.telegram.org/a/#582568456'
            target='_blank'
            className='block rounded-3xl h-16 bg-green-500 w-full text-white text-2xl flex items-center justify-center'
          >
            Buy Course
          </a>
          <Link
            className='block rounded-3xl h-16 border-2 w-full border-black text-2xl border-solid mt-4 flex items-center justify-center'
            href={`/${AppRoutes.AddReview}`}
          >
            Rate this course
          </Link>
        </div>
        <div className='w-1/2 h-96'>
          <div className='p-16 h-full bg-emerald-500 rounded-xl'></div>
        </div>
      </section>
      <section className='my-32 flex'>
        <div className='w-1/2 mr-8'>
          <h2 className='text-4xl font-bold mb-2'>Write Tests Consciously</h2>
          <p className='text-2xl font-bold leading-10'>
            At the end of the course, you will be able to write and debug tests
            with a full and in-depth understanding of what you are doing and how
            things are working.
          </p>
        </div>
        <ul className='w-1/2'>
          {roadByCourse.map((it) => (
            <li key={it} className='text-2xl leading-6 mb-8'>
              {it}
            </li>
          ))}
        </ul>
      </section>
      <section className='my-32 text-center'>
        <h2 className='font-bold text-5xl text-green-800 mb-8'>
          This is What You Will Learn
        </h2>
        <h3 className='text-4xl text-green-300 mb-16'>
          Videos are structured into separate and independent modules for your
          convenience
        </h3>
        <div className='flex justify-center'>
          <ul className='w-3/4'>
            {courseSections.map((section, index) => (
              <li key={section.name} className='bg-green-100 mb-2 p-4'>
                <button
                  onClick={() => expandSubSectionsOfSection(section)}
                  className='flex items-center justify-between w-full font-bold text-3xl text-green-800 rounded'
                >
                  <div className='flex items-center'>
                    <span>{index}</span>
                    <h3 className='ml-16'>{section.name}</h3>
                  </div>
                  <div>Arrow</div>
                </button>
                {section.isExpanded ? (
                  <ul>
                    {section.subSections.map((it) => (
                      <li
                        className='font-light text-3xl text-green-800 my-6 text-start ml-20'
                        key={it}
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <h1 className='text-9xl'>Pricing options</h1>
      <h1 className='text-9xl'>More About Price Options</h1>
      <h1 className='text-9xl'>For Whom Is This Course</h1>
      <h1 className='text-9xl'>
        здесь ты можешь найти больше бесплатного контента
      </h1>
      <h1 className='text-9xl'>Questions You Might Have</h1>
      <h1 className='text-9xl'>Reviews</h1>
    </div>
  );
}

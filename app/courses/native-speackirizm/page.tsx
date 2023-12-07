"use client";
import Link from "next/link";
import { useState } from "react";
import { AppRoutes } from "types/app-routes";

export default function NativeSpeackirizm() {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [courseSections, setCourseSections] = useState([
    { name: "Grammar", subSections: ["1", "2", "3"], isExpanded: false },
    { name: "Speaking", subSections: ["1", "2", "3"], isExpanded: false },
    { name: "Reading", subSections: ["1", "2", "3"], isExpanded: false },
  ]);
  const mentors = [
    {
      name: "Zlata",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortDescription: "In voluptate velit esse cillum dolore eu fugiat",
    },
    {
      name: "Sema",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortDescription: "In voluptate velit esse cillum dolore eu fugiat",
    },
  ];
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
  const moveCarousel = (dir: "left" | "right") => {
    const widthOfOneMentor = 640;
    const countOfMentorsDisplayed = 1;
    if (dir === "left" && carouselPosition !== 0) {
      setCarouselPosition(carouselPosition + widthOfOneMentor);
    } else if (
      dir === "right" &&
      -((mentors.length - countOfMentorsDisplayed) * widthOfOneMentor) <
        carouselPosition
    ) {
      setCarouselPosition(carouselPosition - widthOfOneMentor);
    }
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
      <section className='my-32'>
        <h2 className='text-5xl font-bold mb-16 text-center'>
          Recognized by Angular Experts
        </h2>
        <div className='w-44 flex items-center mx-auto'>
          <button
            onClick={() => moveCarousel("left")}
            className='w-8 h-8 rounded-full bg-slate-500 text-white'
          >
            -
          </button>
          <div className='w-40 h-80 overflow-hidden relative'>
            <ul
              className='flex items-start absolute duration-1000'
              style={{ left: `${carouselPosition}px` }}
            >
              {mentors.map((mentor) => (
                <li key={mentor.name} className='w-40 px-4 text-center'>
                  <h3 className='pb-4 font-bold text-4xl'>{mentor.name}</h3>
                  <h6 className='pb-4 font-bold text-3xl leading-10'>
                    {mentor.shortDescription}
                  </h6>
                  <p className='text-base leading-6 text-xl'>
                    {mentor.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => moveCarousel("right")}
            className='w-8 h-8 rounded-full bg-slate-500 text-white'
          >
            +
          </button>
        </div>
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
    </div>
  );
}

"use client";
import Reviews from "components/reviews";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppRoutes } from "types/app-routes";

export default function Course() {
  const [courseSections, setCourseSections] = useState<
    {
      name: "Grammar";
      subSections: ["1", "2", "3"];
      isExpanded: boolean;
    }[]
  >([]);
  const [roadByCourse, setRoadByCourse] = useState<string[]>([]);
  const [forWhomIsThisCourse, setForWhomIsThisCourse] = useState<
    {
      smile: string;
      text: string;
      bgColor: string;
    }[]
  >([]);
  const [questionsYouMightHave, setQuestionsYouMightHave] = useState<
    { title: string; text: string; showText: boolean }[]
  >([]);
  const [pricingOptions, setPricingOptions] = useState<
    {
      price: string;
      name: string;
    }[]
  >([]);
  const [moreAboutPriceOptions, setMoreAboutPriceOptions] = useState<
    {
      text: string;
      name: string;
      top?: boolean;
    }[]
  >([]);
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
  const getData = async () => {
    const patNameArray = window.location.pathname.split("/");
    await fetch(`./${patNameArray[patNameArray.length - 1]}.json`)
      .then((response: Response) => response.json())
      .then(
        (res: {
          courseSections: {
            name: "Grammar";
            subSections: ["1", "2", "3"];
            isExpanded: boolean;
          }[];
          roadByCourse: string[];
          forWhomIsThisCourse: {
            smile: string;
            text: string;
            bgColor: string;
          }[];
          questionsYouMightHave: {
            title: string;
            text: string;
            showText: boolean;
          }[];
          pricingOptions: {
            price: string;
            name: string;
          }[];
          moreAboutPriceOptions: {
            text: string;
            name: string;
            top?: boolean;
          }[];
        }) => {
          setCourseSections(res.courseSections);
          setRoadByCourse(res.roadByCourse);
          setForWhomIsThisCourse(res.forWhomIsThisCourse);
          setQuestionsYouMightHave(res.questionsYouMightHave);
          setPricingOptions(res.pricingOptions);
          setMoreAboutPriceOptions(res.moreAboutPriceOptions);
        }
      );
  };
  useEffect(() => {
    getData();
  }, []);
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
      <section className='py-16 text-center'>
        <h2 className='text-6xl text-blue-900 font-bold mb-2'>
          For Whom Is This Course
        </h2>
        <p className='text-5xl text-blue-500 mb-6'>
          This course is a perfect choice for you if...
        </p>
        <ul className='flex rounded-xl overflow-hidden'>
          {forWhomIsThisCourse.map((it) => (
            <li
              className={`${it.bgColor} flex flex-col justify-center items-center p-12`}
              key={it.text}
            >
              <div className={`${it.smile} rounded-full h-10 w-10 mb-8`}></div>
              <p className='text-center text-2xl'>{it.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className='py-16 text-center'>
        <h2 className='text-6xl text-blue-900 font-bold mb-2'>
          Questions You Might Have
        </h2>
        <p className='text-5xl text-blue-500 mb-6'>
          And my honest answers to them
        </p>
        <ul className='flex inline-flex flex-col gap-4 max-w-4xl'>
          {questionsYouMightHave.map((it) => (
            <li key={it.title} className='bg-blue-100 flex flex-col rounded-xl'>
              <button
                onClick={() =>
                  setQuestionsYouMightHave(
                    questionsYouMightHave.map((que) => ({
                      ...que,
                      showText:
                        que.title === it.title ? !que.showText : que.showText,
                    }))
                  )
                }
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
      <section className='bg-purple-700 text-white flex gap-20 my-40 p-20'>
        <div>
          <h2 className='text-5xl font-bold mb-4'>Pricing options</h2>
          <p className='text-4xl text-white-400'>
            Pick only what you actually need
          </p>
        </div>
        <ul className='flex flex-col gap-6'>
          {pricingOptions.map((it) => (
            <li
              className='bg-purple-900 rounded-3xl p-12 flex justify-between items-center duration-300 hover:scale-110'
              key={it.name}
            >
              <div>
                <div className='text-4xl font-bold mb-4'>{it.price}</div>
                <div className='text-3xl text-white-400'>{it.name}</div>
              </div>
              <button className='text-xl h-fit rounded-3xl bg-pink-700 p-4'>
                Get started now
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className='my-40'>
        <h2 className='mb-16 text-7xl font-bold text-center text-purple-900'>
          More About Price Options
        </h2>
        <ul className='flex gap-10'>
          {moreAboutPriceOptions.map((it) => (
            <li
              className={`${
                !it.top ||
                "bg-purple-100 rounded-xl hover:scale-110 duration-300 relative"
              } p-10 text-center`}
              key={it.name}
            >
              {it.top ? (
                <div className='absolute bg-orange-500 text-white px-4 font-bold py-2 right-0 top-0 rounded-xl'>
                  Top Deal
                </div>
              ) : (
                <></>
              )}
              <div className='text-pink-700 text-2xl font-bold mb-10'>
                {it.name}
              </div>
              <div className='text-purple-900 text-xl'>{it.text}</div>
            </li>
          ))}
        </ul>
      </section>
      <div className='max-w-5xl mx-auto m-20 p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-center text-5xl font-bold mb-8'>
          Здесь ты можешь найти больше бесплатного контента
        </h1>
        <p className='text-gray-600 text-xl'>
          Добро пожаловать! Мы рады предложить вам множество бесплатного
          контента. Погрузитесь в мир знаний и разнообразных ресурсов.
        </p>
        <a
          target='_blank'
          href='https://www.instagram.com/'
          className='rounded-3xl h-16 bg-green-500 w-full text-white text-2xl w-auto px-4 mt-8 mx-auto inline-flex items-center justify-center'
        >
          Изучить больше
        </a>
      </div>
      <Reviews />
    </div>
  );
}

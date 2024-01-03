import CourseSections from "app/courses/[id]/components/course-sections";
import QuestionsYouMightHave from "app/courses/[id]/components/questions-you-might-have";
import Reviews from "components/reviews";
import Link from "next/link";
import { use } from "react";
import { AppRoutes } from "types/app-routes.types";
import { ICourseInfo } from "types/course.types";

const getData = async (id: string): Promise<ICourseInfo> => {
  const data = await fetch(`http://localhost:3001/courses/${id}`, {
    cache: "force-cache",
  });
  const qdata = await data.json();
  return qdata;
};

const Course = ({ params }: { params: { id: string } }) => {
  const data = use(getData(params.id));
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
          {data.roadByCourse.map((it) => (
            <li key={it} className='text-2xl leading-6 mb-8'>
              {it}
            </li>
          ))}
        </ul>
      </section>
      <CourseSections courseSections={data.courseSections} />
      <section className='py-16 text-center'>
        <h2 className='text-6xl text-blue-900 font-bold mb-2'>
          For Whom Is This Course
        </h2>
        <p className='text-5xl text-blue-500 mb-6'>
          This course is a perfect choice for you if...
        </p>
        <ul className='flex rounded-xl overflow-hidden'>
          {data.forWhomIsThisCourse.map((it) => (
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
      <QuestionsYouMightHave
        questionsYouMightHave={data.questionsYouMightHave}
      />
      <section className='bg-purple-700 text-white flex gap-20 my-40 p-20'>
        <div>
          <h2 className='text-5xl font-bold mb-4'>Pricing options</h2>
          <p className='text-4xl text-white-400'>
            Pick only what you actually need
          </p>
        </div>
        <ul className='flex flex-col gap-6'>
          {data.pricingOptions.map((it) => (
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
          {data.moreAboutPriceOptions.map((it) => (
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
};

export const generateStaticParams = async () => {
  const data = await fetch("http://localhost:3001/courses", {
    cache: "force-cache",
  });
  const qdata: ICourseInfo[] = await data.json();
  return qdata.map((it) => ({
    id: it.id,
  }));
};

export default Course;

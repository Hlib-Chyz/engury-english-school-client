import { instance } from "app/page";
import Link from "next/link";
import { use } from "react";
import { AppRoutes } from "types/app-routes.types";
import { ICourseInfo } from "types/course.types";

const getData = async (): Promise<ICourseInfo[]> => {
  const data = await instance.get(`courses`, {
    headers: {
      cache: "force-cache",
    },
  });
  return data.data;
};

export default function Courses() {
  const courses = use(getData());
  return (
    <>
      <h1 className='text-7xl text-center pb-16 font-bold'>
        Check Out All My Courses 👇
      </h1>
      <ul className='flex justify-between gap-16 pb-16 flex-wrap'>
        {courses.map((course) => (
          <li key={course.title}>
            <Link href={`/${AppRoutes.Courses}/${course.id}`}>
              <div className='w-96 hover bg-slate-200 duration-300 p-8 rounded-3xl hover:bg-slate-100 hover:-translate-y-6 hover:shadow-lg'>
                <section>
                  <h3 className='text-3xl pb-8 font-bold'>{course.title}</h3>
                  <p className='text-base pb-8'>{course.description}</p>
                  <div className='font-bold'>{course.price}</div>
                </section>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

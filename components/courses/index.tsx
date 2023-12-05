import Link from "next/link";
import { AppRoutes } from "types/app-routes";

export default function Courses() {
  const courses = [
    {
      name: "Native Speackirizm",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`,
      price: "900$",
      route: AppRoutes.NativeSpeackirizm,
    },
    {
      name: "Extra Speaking",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`,
      price: "900$",
      route: AppRoutes.ExtraSpeaking,
    },
    {
      name: "Extra Grammar",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`,
      price: "900$",
      route: AppRoutes.ExtraGrammar,
    },
    {
      name: "Lessons with Zlata",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`,
      price: "900$",
      route: AppRoutes.LessonsWithZlata,
    },
  ];

  return (
    <>
      <h1 className='text-7xl text-center pb-16 font-bold'>
        Check Out All My Courses 👇
      </h1>
      <ul className='flex justify-between gap-16 pb-16 flex-wrap'>
        {courses.map((course) => (
          <li key={course.name}>
            <Link href={course.route}>
              <div className='w-96 hover bg-slate-200 duration-300 p-8 rounded-3xl hover:bg-slate-100 hover:-translate-y-6 hover:shadow-lg'>
                <section>
                  <h3 className='text-3xl pb-8 font-bold'>{course.name}</h3>
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

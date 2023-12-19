import Link from "next/link";
import { AppRoutes } from "types/app-routes";

export default function Header() {
  return (
    <header className='bg-slate-500 text-white'>
      <div className='max-w-7xl mx-auto h-20 flex items-center justify-between'>
        <Link href={`/`}>Logo</Link>
        <nav>
          <ul className='flex items-center gap-x-4'>
            <li>
              <a
                target='_blank'
                href='https://www.instagram.com/'
                className='p-2 hover:bg-slate-700 duration-300 rounded'
              >
                Instagram Icon
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.tiktok.com/uk-UA/'
                className='p-2 hover:bg-slate-700 duration-300 rounded'
              >
                Tiktok Icon
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://web.telegram.org/a/#582568456'
                className='p-2 hover:bg-slate-700 duration-300 rounded'
              >
                Telegram Icon
              </a>
            </li>
            <li>
              <Link
                href={`/${AppRoutes.Tutorials}`}
                className='p-2 hover:bg-slate-700 duration-300 rounded'
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className='p-2 hover:bg-slate-700 duration-300 rounded'
              >
                COURSES
              </Link>
            </li>
            <li>
              <Link
                href={`/${AppRoutes.AboutYourself}`}
                className='p-2 hover:bg-slate-700 duration-300 rounded'
              >
                About Yourself
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

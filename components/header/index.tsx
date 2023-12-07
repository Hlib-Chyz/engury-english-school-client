import Link from "next/link";

export default function Header() {
  return (
    <header className='bg-slate-500 text-white'>
      <div className='max-w-7xl mx-auto h-20 flex items-center justify-between'>
        <Link href={`/`}>Logo</Link>
        <nav>
          <ul className='flex items-center gap-x-4'>
            <li>
              <button className='p-2 hover:bg-slate-700 duration-300 rounded'>
                INSTAGRAM
              </button>
            </li>
            <li>
              <button className='p-2 hover:bg-slate-700 duration-300 rounded'>
                BLOG
              </button>
            </li>
            <li>
              <button className='p-2 hover:bg-slate-700 duration-300 rounded'>
                COURSES
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

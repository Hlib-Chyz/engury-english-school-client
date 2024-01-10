import Courses from "app/components/Courses";
import Reviews from "app/components/Reviews";

export default function Home() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Courses />
      <Reviews />
    </div>
  );
}

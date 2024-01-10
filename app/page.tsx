import Courses from "components/courses";
import Reviews from "components/reviews";

export default function Home() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Courses />
      <Reviews />
    </div>
  );
}

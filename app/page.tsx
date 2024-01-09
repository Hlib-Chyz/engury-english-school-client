import axios from "axios";
import Courses from "components/courses";
import Reviews from "components/reviews";

export const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

export default function Home() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Courses />
      <Reviews />
    </div>
  );
}

"use client";
import Courses from "../components/courses";
import Footer from "../components/footer";
import Header from "../components/header";
import Reviews from "../components/reviews";

export default function Home() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <main className='max-w-7xl mx-auto pb-16'>
        <Courses />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

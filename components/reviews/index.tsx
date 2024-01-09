"use client";
import { instance } from "app/page";
import { useEffect, useState } from "react";
import { IReview } from "types/review.types";

export default function Reviews({ courseId }: { courseId?: string }) {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const getReviews = async (): Promise<void> => {
    const { data } = await instance.get(
      courseId ? `review/${courseId}` : "review"
    );
    setReviews(data);
  };
  useEffect(() => {
    getReviews();
  }, []);

  const moveCarousel = (dir: "left" | "right") => {
    const widthOfOneReview = 320;
    const countOfReviewsDisplayed = 2;
    if (dir === "left" && carouselPosition !== 0) {
      setCarouselPosition(carouselPosition + widthOfOneReview);
    } else if (
      dir === "right" &&
      -((reviews.length - countOfReviewsDisplayed) * widthOfOneReview) <
        carouselPosition
    ) {
      setCarouselPosition(carouselPosition - widthOfOneReview);
    }
  };

  return (
    <div>
      <h2 className='text-3xl text-center pb-16 font-bold'>
        What People Say About Courses
      </h2>
      <div className='w-44 flex items-center mx-auto'>
        <button
          onClick={() => moveCarousel("left")}
          className='w-8 h-8 rounded-full bg-slate-500 text-white'
        >
          -
        </button>
        <div className='w-40 h-80 overflow-hidden relative'>
          <ul
            className='flex items-start absolute duration-1000'
            style={{ left: `${carouselPosition}px` }}
          >
            {reviews.map((review) => (
              <li key={review._id} className='min-w-80 px-4'>
                <h4 className='text-amber-600 pb-4 font-bold text-xl'>
                  {review.rating}
                </h4>
                <h6 className='pb-4 font-bold text-lg'>{review.owner}</h6>
                <p className='text-wrap'>{review.revocation}</p>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => moveCarousel("right")}
          className='w-8 h-8 rounded-full bg-slate-500 text-white'
        >
          +
        </button>
      </div>
    </div>
  );
}

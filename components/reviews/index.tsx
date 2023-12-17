import { useState } from "react";

export default function Reviews() {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const reviews = [
    {
      ownerName: "Ral Oliver 1",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortReview: "The best courses about Angular Forms",
    },
    {
      ownerName: "Ral Oliver 2",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortReview: "The best courses about Angular Forms",
    },
    {
      ownerName: "Ral Oliver 3",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortReview: "The best courses about Angular Forms",
    },
    {
      ownerName: "Ral Oliver 4",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortReview: "The best courses about Angular Forms",
    },
    {
      ownerName: "Ral Oliver 5",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortReview: "The best courses about Angular Forms",
    },
    {
      ownerName: "Ral Oliver 6",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      shortReview: "The best courses about Angular Forms",
    },
  ];

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
              <li key={review.ownerName} className='min-w-80 px-4'>
                <h4 className='text-amber-600 pb-4 font-bold text-xl'>
                  {review.shortReview}
                </h4>
                <h6 className='pb-4 font-bold text-lg'>{review.ownerName}</h6>
                <p className='text-base'>{review.review}</p>
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

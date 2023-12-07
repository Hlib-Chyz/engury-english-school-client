"use client";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function AddReview() {
  const [numberOfStars, setNumberOfStars] = useState(5);
  const [temporaryNumberOfStars, setTemporaryNumberOfStars] = useState(5);
  return (
    <div className='mt-32 w-fit mx-auto'>
      <h2 className='text-5xl mb-6'>Tell us what you thought of:</h2>
      <h2 className='text-4xl font-bold mb-6'>Extra Grammar</h2>
      <div className='flex-col mb-4'>
        <label className='text-base font-bold'>Review Title</label>
        <div>
          <input className='bg-gray-200 text-3xl p-4 w-full outline-red-300' />
        </div>
      </div>
      <div className='mb-4'>
        <label className='text-base font-bold'>Review Text</label>
        <div>
          <textarea className='bg-gray-200 text-3xl p-4 w-full outline-red-300' />
        </div>
      </div>
      <div>
        <label className='text-base font-bold'>Rating</label>
        <ul className='mt-4 mb-16 flex gap-1'>
          {[1, 2, 3, 4, 5].map((rate) => (
            <button
              key={rate}
              onMouseEnter={() => setTemporaryNumberOfStars(rate)}
              onMouseLeave={() => setTemporaryNumberOfStars(numberOfStars)}
              onClick={() => setNumberOfStars(rate)}
            >
              <img
                alt='Star'
                width={32}
                height={32}
                src={
                  rate <= temporaryNumberOfStars
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/630px-Red_star.svg.png?20221019235056"
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/White_Stars_1.svg/480px-White_Stars_1.svg.png"
                }
              />
            </button>
          ))}
        </ul>
      </div>
      <button className='bg-red-400 text-white p-4 rounded-full font-bold text-lg'>
        Submit Review
      </button>
    </div>
  );
}

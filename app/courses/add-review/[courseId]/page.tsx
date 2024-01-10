"use client";
import { axiosInstance } from "app/axios";
import { ChangeEvent, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function AddReview({
  params,
}: {
  params: { courseId: string };
}) {
  const [numberOfStars, setNumberOfStars] = useState(5);
  const [temporaryNumberOfStars, setTemporaryNumberOfStars] = useState(5);
  const [revocation, setRevocation] = useState("");
  const [errorRevocation, setErrorRevocation] = useState("");
  const [owner, setOwner] = useState("");
  const [errorOwner, setErrorOwner] = useState("");
  const handleRevocationChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setRevocation(inputValue);
    if (inputValue === "") {
      setErrorRevocation("Revocation field is required");
    } else {
      setErrorRevocation("");
    }
  };
  const handleOwnerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setOwner(inputValue);
    if (inputValue === "") {
      setErrorOwner("Owner field is required");
    } else {
      setErrorOwner("");
    }
  };
  const postReview = async () => {
    await axiosInstance.post("mail/send-revocation-confirmation", {
      owner,
      revocation,
      rating: numberOfStars,
      courseId: params.courseId,
    });
  };
  return (
    <div className='mt-32 w-fit mx-auto'>
      <h2 className='text-5xl mb-6'>Tell us what you thought of:</h2>
      <h2 className='text-4xl font-bold mb-6'>Extra Grammar</h2>
      <div className='flex-col mb-4'>
        <label className='text-base font-bold'>Review Owner</label>
        <div>
          <input
            value={owner}
            onChange={handleOwnerChange}
            className='bg-gray-200 text-3xl p-4 w-full outline-red-300'
          />
          {errorOwner ? <p className='text-red-500'>{errorOwner}</p> : <></>}
        </div>
      </div>
      <div className='mb-4'>
        <label className='text-base font-bold'>Review Text</label>
        <div>
          <textarea
            value={revocation}
            onChange={handleRevocationChange}
            className='bg-gray-200 text-3xl p-4 w-full outline-red-300'
          />
          {errorRevocation ? (
            <p className='text-red-500'>{errorRevocation}</p>
          ) : (
            <></>
          )}
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
      <button
        disabled={Boolean(errorOwner !== "" || errorRevocation !== "")}
        onClick={postReview}
        className='bg-red-400 text-white p-4 rounded-full font-bold text-lg'
      >
        Submit Review
      </button>
    </div>
  );
}

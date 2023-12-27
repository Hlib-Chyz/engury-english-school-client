"use client";

import { TextType } from "types/tutorial.types";

export default function Tutorial() {
  const tutorial: { type: TextType; text: string }[] = [
    {
      type: TextType.Title,
      text: "RxJS – Streams Analogs In Real Life",
    },
    {
      type: TextType.ShortDescription,
      text: "By Tom Kotlar / In Angular, RxJS / 1 month ago / 6 Min Read / Add Comment",
    },
    {
      type: TextType.Text,
      text: "Every Angular developer encounters RxJS in their codebase. A frequently common challenge for new Angular developers involves grasping RxJS concepts, including Observable, Observer, and Subject.",
    },
    {
      type: TextType.Text,
      text: "Working with RxJS might not feel intuitive initially, requiring time to understand the underlying mindset of the library. This article is called to make understanding RxJS much easier by providing some analogies from real life. One such relatable analogy can be drawn with household water pipes.",
    },
    {
      type: TextType.Text,
      text: "Imagine a house or a flat. Each property requires water pipe installations. In the world of RxJS, we can represent pipe installation as usage of operators like from or of as those that create a stream of water.",
    },
    {
      type: TextType.Text,
      text: "The stream$ itself does nothing, it simply exists, much like water pipes in your property. The water flowing through these pipes represents our data, which could be an object, string, number, array, event, or any other data type.",
    },
    {
      type: TextType.Text,
      text: "Imagine a scenario where you’re feeling thirsty and reach for a glass of water. Just as you turn the tap to let water flow through the pipes, in RxJS we use the subscribe method to start receiving data from an Observable stream.",
    },
    {
      type: TextType.Text,
      text: "In our water analogy, leaving the water tap open can result in either flooding your neighbor’s apartment below or receiving a massive water bill. The essential lesson to be learned from this analogy underscores the importance of unsubscribing from a stream when it’s no longer needed. This helps prevent memory leaks that can significantly slow down your application.”",
    },
    {
      type: TextType.SubTitle,
      text: "Transformation & Filtering",
    },
    {
      type: TextType.Text,
      text: "If your water isn’t clean enough, you’d probably opt for a water filter to purify the tap water, removing metals or solids. In RxJS, this is a job for filtering operators, with the filter being the most popular choice. The logic here is similar to the JavaScript Array filter operator. To employ the RxJs filter operator, we need to use the pipe function, which allows us to use and combine various operators.",
    },
    {
      type: TextType.Text,
      text: "Or, imagine that after a long day of coding in Angular and immersing ourselves in RxJS, you may be eagerly anticipating a relaxing hot shower. Just as you rely on a water boiler or heater to warm the cold water in your home, think of this process in terms of RxJS transformation operators, like the map operator.",
    },
    {
      type: TextType.Text,
      text: "We can stack different operators together. Don’t forget the comma after each operator.",
    },
    {
      type: TextType.Text,
      text: "It also happens, that we want to perform neither transformation nor filtering. Instead, we want to use the water “outside” for a while and bring it back into a pipe without any modifications. For example, we would need it to make a water meter work. This is a so-called “side-effect” and in RxJS such side effects can be performed by the operator like “tap”.",
    },
    {
      type: TextType.SubTitle,
      text: "Dealing With Errors",
    },
    {
      type: TextType.Text,
      text: "Dealing with an aging pipe system can often lead to unexpected water leaks or even pipe bursts. In such challenging situations, making informed decisions is crucial. One smart approach is to promptly shut off the water supply to prevent further damage.",
    },
    {
      type: TextType.Text,
      text: "In the world of RxJS, the error raised in one of the operators completes the stream, so the data doesn’t “flow” downstream through other operators. Instead, the error goes to error-handling operators that gracefully manage and recover from errors in your code flow. These include (catchError, retry, retryWhen)",
    },
  ];
  return (
    <div className='flex-col max-w-5xl mx-auto my-20'>
      {tutorial.map((it) => {
        switch (it.type) {
          case TextType.Title:
            return <h1 className='text-7xl mb-2'>{it.text}</h1>;
          case TextType.ShortDescription:
            return <p className='text-2xl text-gray-300 mb-6'>{it.text}</p>;
          case TextType.Text:
            return <p className='text-2xl mb-9'>{it.text}</p>;
          case TextType.SubTitle:
            return <p className='text-4xl mb-9'>{it.text}</p>;
          default:
            return <></>;
        }
      })}
    </div>
  );
}

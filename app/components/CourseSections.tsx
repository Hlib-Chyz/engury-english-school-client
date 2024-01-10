"use client";
import { ICourseInfo } from "app/types/course.types";
import { useState } from "react";

const CourseSections = ({
  courseSections,
}: {
  courseSections: ICourseInfo["courseSections"];
}) => {
  const [data, setData] = useState(courseSections);
  const expandSubSectionsOfSection = (
    section: ICourseInfo["courseSections"][0]
  ) => {
    setData(
      data.map((it) => ({
        ...it,
        isExpanded: it.name === section.name ? !it.isExpanded : it.isExpanded,
      }))
    );
  };

  return (
    <section className='my-32 text-center'>
      <h2 className='font-bold text-5xl text-green-800 mb-8'>
        This is What You Will Learn
      </h2>
      <h3 className='text-4xl text-green-300 mb-16'>
        Videos are structured into separate and independent modules for your
        convenience
      </h3>
      <div className='flex justify-center'>
        <ul className='w-3/4'>
          {data.map((section, index) => (
            <li key={section.name} className='bg-green-100 mb-2 p-4'>
              <button
                onClick={() => expandSubSectionsOfSection(section)}
                className='flex items-center justify-between w-full font-bold text-3xl text-green-800 rounded'
              >
                <div className='flex items-center'>
                  <span>{index}</span>
                  <h3 className='ml-16'>{section.name}</h3>
                </div>
                <div>Arrow</div>
              </button>
              {section.isExpanded ? (
                <ul>
                  {section.subSections.map((it) => (
                    <li
                      className='font-light text-3xl text-green-800 my-6 text-start ml-20'
                      key={it}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CourseSections;

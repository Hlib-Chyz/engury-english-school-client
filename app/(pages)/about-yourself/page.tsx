"use client";

const AboutYourself = () => {
  return (
    <div className='flex-col'>
      <div className='bg-gray-200 p-20'>
        <h2 className='text-5xl font-bold mb-20 text-center'>
          Meet your Instructor
        </h2>
        <div className='flex items-center'>
          <div className='h-60 w-60 rounded-full flex items-center justify-center bg-green-300'>
            Zlata
          </div>
          <div className='ml-20 w-fit'>
            <p className='text-xl mb-4'>
              Top Mentor in the world | perfect girlfriend | the best friend
            </p>
            <h4 className='text-3xl mb-8 font-bold'>Zlata Chyzhovskaya</h4>
            <p className='text-lg'>
              You want to learn how to create custom form controls because you
              are tired of hacking the Angular Material components and trying to
              adjust them to the creative whims of your UI Designers &
              Managers.You want to learn how to create custom form controls
              because you are tired of hacking the Angular Material components
              and trying to adjust them to the creative whims of your UI
              Designers & Managers.You want to learn how to create custom form
              controls because you are tired of hacking the Angular Material
              components and trying to adjust them to the creative whims of your
              UI Designers & Managers.You want to learn how to create custom
              form controls because you are tired of hacking the Angular
              Material components and trying to adjust them to the creative
              whims of your UI Designers & Managers
            </p>
          </div>
        </div>
      </div>
      <div className='max-w-lg mx-auto p-6 mt-20 bg-purple-700 rounded-md shadow-md text-white'>
        <h1 className='text-center text-3xl font-extrabold mb-4'>
          Мои методики
        </h1>
        <p className='text-lg'>
          Добро пожаловать! Здесь я представляю вам мои инновационные методики
          обучения. Каждая из них разработана с учетом передовых педагогических
          практик и направлена на достижение выдающихся результатов.
        </p>
        <ul className='list-disc mt-4'>
          <li>Методика 1: Описание первой методики.</li>
          <li>Методика 2: Описание второй методики.</li>
          <li>Методика 3: Описание третьей методики.</li>
        </ul>
      </div>
      <div className='max-w-lg mx-auto mt-20 p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>
          Мои красные и зеленые флаги при трудоустройстве
        </h1>
        <p className='text-red-500'>
          🚩 Красные флаги: важные моменты, на которые стоит обратить внимание
          при выборе места работы.
        </p>
        <ul className='list-disc mt-4'>
          <li className='text-red-500'>Низкая зарплата.</li>
          <li className='text-red-500'>Отсутствие карьерного роста.</li>
          <li className='text-red-500'>Неудовлетворительные условия труда.</li>
        </ul>
        <p className='text-green-500 mt-4'>
          ✅ Зеленые флаги: положительные аспекты, которые делают место работы
          привлекательным.
        </p>
        <ul className='list-disc mt-4'>
          <li className='text-green-500'>Конкурентоспособная зарплата.</li>
          <li className='text-green-500'>
            Возможности для профессионального роста.
          </li>
          <li className='text-green-500'>
            Благоприятные условия труда и коллектив.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutYourself;

const Footer = () => {
  return (
    <footer className='bg-blue-700 text-white'>
      <div className='max-w-7xl mx-auto p-10'>
        <div className='flex w-full justify-between items-center border-b-2 border-b-blue-900 pb-8'>
          <a
            target='_blank'
            href='https://www.instagram.com/'
            className='p-2 hover:bg-green-700 duration-300 rounded'
          >
            Instagram
          </a>
          <div>
            <a
              target='_blank'
              href='https://www.tiktok.com/uk-UA/'
              className='p-2 hover:bg-green-700 duration-300 rounded'
            >
              Tiktok Icon
            </a>
            <a
              target='_blank'
              href='https://web.telegram.org/a/#582568456'
              className='p-2 hover:bg-green-700 duration-300 rounded'
            >
              Telegram Icon
            </a>
          </div>
        </div>
        <div className='pt-8 opacity-60 text-xl'>© Copyright Zlata 2023</div>
      </div>
    </footer>
  );
};

export default Footer;

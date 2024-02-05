'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

export default function AboutUs() {
  const containerRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const team = [
    {
      name: t('Idan'),
      title: t('IdanTitle'),
      image: '/user2.png',
      desc: [t('IdanDesc')],
    },
    {
      name: t('Shaked'),
      title: t('ShakedTitle'),
      image: '/user4.png',
      desc: [t('ShakedDesc')],
    },
    {
      name: t('Michal'),
      title: t('MichalTitle'),
      image: '/image/6.png',
      desc: [t('MichalDesc')],
    },
    {
      name: t('Tom'),
      title: t('TomTitle'),
      image: '/image/7.png',
      desc: [t('TomDesc')],
    },
    {
      name: t('Ben'),
      title: t('BenTitle'),
      image: '/image/8.png',
      desc: [t('BenDesc')],
    },
  ];

  const scrollToNext = () => {
    if (selectedIndex < team.length) {
      setSelectedIndex((prev) => prev + 1);
      if (containerRef.current) {
        containerRef.current.scrollLeft += containerRef.current.clientWidth;
      }
    }
  };
  const scrollToPrevious = () => {
    if (selectedIndex > 1) {
      setSelectedIndex((prev) => prev - 1);
      if (containerRef.current) {
        containerRef.current.scrollLeft -= containerRef.current.clientWidth;
      }
    }
  };
  console.log(selectedIndex, 'index');
  return (
    <div id='aboutUs' className='relative'>
      {/* <Image
        className='z-10 right-0 absolute w-[100vw] h-full object-fill opacity-100'
        src='/bg.jpg'
        alt='Logo'
        width={2100}
        height={2100}
        priority
      /> */}
      <div className='relative w-full min-h-[91vh] bg-black text-white flex flex-col z-10 px-5 lg:px-20 xl:px-40 pt-[7rem] pb-20'>
        <h1
          data-aos='fade-up'
          className='text-4xl lg:text-5xl xl:text-6xl text-secondary text-center font-bold'
        >
          {t('aboutUs')}
        </h1>
        <div className='w-full text-center my-5'>
          <p className='text-lg xl:text-xl leading-[1.3]'>
            {t('aboutUsDesc1')}
          </p>
          <p className='text-lg xl:text-xl leading-[1.3] mt-2'>
            {t('aboutUsDesc2')}
          </p>
        </div>
        <div className='w-[80vw] flex items-center relative mt-20'>
          <button
            onClick={scrollToPrevious}
            className={`${
              selectedIndex === 1
                ? 'hover:shadow-none bg-white text-black'
                : 'hover:shadow-md hover:shadow-secondary hover:text-2xl hover:scale-105 transition-all duration-300 text-white bg-primary'
            } absolute z-10 -left-8 w-16 h-16 flex items-center justify-center text-xl rounded-full hover:shadow-md hover:shadow-secondary bg-primary`}
            disabled={selectedIndex === 1}
          >
            <FaArrowLeft />
          </button>
          <div
            ref={containerRef}
            className='w-full flex items-center overflow-hidden'
          >
            {team.map((person, index) => (
              <div
                key={index}
                className='w-full h-fit flex justify-center rounded-2xl bg-gradient-to-tl from-secondary to-primary text-white'
              >
                <div className='w-[25vw] flex items-center justify-end pt-16 pb-10 px-5'>
                  <div className='relative flex w-[15rem] h-[17rem] backdrop-blur-md rounded-t-2xl shadow-md shadow-secondary bg-secondary mt-10 pb-2'>
                    <Image
                      className='absolute bottom-20 w-[15rem] h-full hover:scale-110 transition-all duration-300 object-cover'
                      src={person.image}
                      alt='Logo'
                      width={2200}
                      height={2800}
                      priority
                    />
                    <div className='w-full scale-125 rounded-xl text-white bg-primary shadow-md shadow-secondary mt-auto px-4 py-2'>
                      <h1 className='text-2xl font-bold'>{person.name}</h1>
                      <p className='text-xs'>{person.title}</p>
                    </div>
                  </div>
                </div>
                <div className='w-[65vw] flex justify-center items-center text-lg leading-[1.2] text-center px-[5%]'>
                  {person.desc}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollToNext}
            className={`${
              selectedIndex >= team.length
                ? 'hover:shadow-none bg-white text-black'
                : 'hover:shadow-md hover:shadow-secondary hover:text-2xl hover:scale-105 transition-all duration-300 text-white bg-primary'
            } absolute z-10 -right-8 w-16 h-16 flex items-center justify-center text-xl rounded-full hover:shadow-md hover:shadow-secondary bg-primary`}
            disabled={selectedIndex >= team.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

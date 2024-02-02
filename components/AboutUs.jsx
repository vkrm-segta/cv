'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const charactersToShow = 380;

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getDescriptionToShow = (text, index) => {
    const characters = text.join(' ').slice(0, charactersToShow);

    if (expandedIndex === index) {
      return text.join(' ');
    } else {
      return characters;
    }
  };

  const team = [
    {
      name: t('Idan'),
      title: t('IdanTitle'),
      image: '/user2.jpg',
      desc: [t('IdanDesc')],
    },
    {
      name: t('Shaked'),
      title: t('ShakedTitle'),
      image: '/user4.jpg',
      desc: [t('ShakedDesc')],
    },
    {
      name: t('Michal'),
      title: t('MichalTitle'),
      image: '/image/6.jpg',
      desc: [t('MichalDesc')],
    },
    {
      name: t('Tom'),
      title: t('TomTitle'),
      image: '/image/7.jpg',
      desc: [t('TomDesc')],
    },
    {
      name: t('Ben'),
      title: t('BenTitle'),
      image: '/image/8.jpg',
      desc: [t('BenDesc')],
    },
  ];

  return (
    <div id='aboutUs' className='relative'>
      <Image
        className='z-10 right-0 absolute w-[100vw] h-full object-fill opacity-100'
        src='/bg.jpg'
        alt='Logo'
        width={2100}
        height={2100}
        priority
      />
      <div className='relative w-full min-h-[91vh] text-black bg-[#F2F9F9] flex flex-col z-10 px-5 lg:px-20 xl:px-40 pt-[7rem] pb-20'>
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
        <div
          data-aos='zoom-in'
          data-aos-duration='2000'
          className={`${
            i18n.language === 'he'
              ? 'flex-col lg:flex-row-reverse'
              : 'flex-col lg:flex-row'
          } flex flex-wrap gap-5 xl:gap-10 mt-8`}
        >
          {team.map((person, index) => (
            <div
              key={index}
              className='w-full lg:w-[30%] min-h-[500px] h-fit flex flex-col items-center rounded-2xl text-black p-5'
            >
              <Image
                className='relative w-full h-[20rem] object-cover shadow-md rounded-3xl'
                src={person.image}
                alt='Logo'
                width={2200}
                height={2800}
                priority
              />
              <div
                className={`${
                  i18n.language === 'he' ? 'text-right' : 'text-left'
                } w-full my-2`}
              >
                <h1 className='text-2xl xl:text-3xl font-bold text-secondary'>
                  {person.name}
                </h1>
                <p className='text-black text-lg xl:text-xl'>{person.title}</p>
              </div>
              <div className='mt-3'>
                <p
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } text-base xl:text-lg text-gray-700 leading-[1.3] mt-2`}
                >
                  {getDescriptionToShow(person.desc, index)}
                  {person.desc.length < charactersToShow && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className='text-secondary underline cursor-pointer'
                    >
                      {expandedIndex === index
                        ? t('seeLess')
                        : `...${t('seeMore')}`}
                    </button>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

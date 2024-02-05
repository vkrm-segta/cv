'use client';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FaCaretRight } from 'react-icons/fa';

export default function HowItWorks() {
  const { t, i18n } = useTranslation();

  const data = [
    {
      title: t('howItWorkTitle1'),
      logo: '/image/10.jpg',
      decs: t('howItWorkDesc1'),
    },
    {
      title: t('howItWorkTitle2'),
      logo: '/image/11.jpg',
      decs: t('howItWorkDesc1'),
    },
    {
      title: t('howItWorkTitle3'),
      logo: '/image/12.jpg',
      decs: t('howItWorkDesc1'),
    },
    {
      title: t('howItWorkTitle4'),
      logo: '/image/13.jpg',
      decs: t('howItWorkDesc1'),
    },
  ];

  return (
    <div id='howItWorks' className='relative'>
      {/* <Image
        className='z-10 right-0 absolute w-[100vw] h-full object-fill opacity-100'
        src='/bg2.jpg'
        alt='Logo'
        width={2100}
        height={2100}
        priority
      /> */}
      <div className='z-20 relative w-full min-h-[71vh] bg-black text-white flex flex-col pt-[5.2rem] pb-2'>
        <div className='z-10 px-5 lg:px-20 xl:px-40 pt-10'>
          <div data-aos='fade-up' className='text-center text-black z-10'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl text-secondary font-extrabold'>
              {t('howItWorks?')}
            </h1>
            <p className='text-white text-base xl:text-lg mt-2'>
              {t('revolutionizeYour')}
            </p>
          </div>
          <div
            data-aos='zoom-out-up'
            data-aos-duration='1000'
            className={`${
              i18n.language === 'he'
                ? 'flex-col lg:flex-row-reverse'
                : 'flex-col lg:flex-row'
            } flex justify-around mt-16`}
          >
            {data.map((item, index) => (
              <div key={index} className='flex items-center w-full lg:w-[23%]'>
                <div className='relative w-full lg:w-[95%] flex justify-center items-center shadow-md rounded-full border-4 hover:border-0 border-secondary p-0 hover:p-0 hover:scale-105 transition-all duration-500 bg-secondary mb-20 lg:mb-0 overflow-hidden'>
                  <Image
                    className='relative w-full h-full object-cover rounded-full'
                    src={item.logo}
                    alt='Logo'
                    width={2800}
                    height={2800}
                    priority
                  />
                  <div className='absolute h-full w-full flex items-center justify-center rounded-full backdrop-blur-[2px] bg-black/40 p-5'>
                    <h1 className='leading-[1.1] xl:leading-[1.1] text-secondary text-base font-bold xl:text-xl text-center mt-3'>
                      {item.title}
                    </h1>
                  </div>
                </div>
                {data.length - 1 !== index && (
                  <div className='flex w-[5%] ml-7'>
                    <FaCaretRight size={30} className='text-secondary' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

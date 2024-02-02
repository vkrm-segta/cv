'use client';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

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
      <Image
        className='z-10 right-0 absolute w-[100vw] h-full object-fill opacity-100'
        src='/bg2.jpg'
        alt='Logo'
        width={2100}
        height={2100}
        priority
      />
      <div className='z-20 relative w-full min-h-[91vh] text-black flex flex-col pt-[5.2rem] pb-2'>
        <div className='absolute top-0 w-full h-[50%] lg:h-[70%] bg-[#21FAFB bg-gradient-to-b from-primary to-tertiary' />
        <div className='z-10 px-5 lg:px-20 xl:px-40 pt-10'>
          <div data-aos='fade-up' className='text-center text-white z-10'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl text-secondary font-bold'>
              {t('howItWorks?')}
            </h1>

            <p className='text-base xl:text-lg mt-2'>
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
              <div
                key={index}
                className='relative w-full lg:w-[22%] flex justify-center shadow-md rounded-lg bg-[#F2F9F9] px-5 pt-2 pb-7 mb-20 lg:mb-0'
              >
                {/* <div className='-top-10 absolute w-20 h-20 flex justify-center items-center rounded-full bg-[#F2F9F9]'>
                  <p className='w-[80%] h-[80%] flex justify-center items-center text-2xl font-semibold rounded-full border-[4px] border-primary'>
                    {index + 1}
                  </p>
                </div> */}
                <div className='flex flex-col items-center mt-10'>
                  <Image
                    className='relative w-40 h-40 object-cover'
                    src={item.logo}
                    alt='Logo'
                    width={2800}
                    height={2800}
                    priority
                  />
                  <h1 className='leading-[1.1] xl:leading-[1.1] text-base xl:text-xl text-center mt-3'>
                    {item.title}
                  </h1>
                  {/* <p className='leading-[1.1] xl:leading-[1.1] text-sm xl:text-base text-gray-600 text-center mt-2'>
                    {item.decs}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

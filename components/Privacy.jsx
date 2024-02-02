import React from 'react';
import { useTranslation } from 'next-i18next';

export default function Privacy() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <p className='text-base xl:text-xl text-center leading-[1.3] mt-5'>
        {t('privacyDesc')}
      </p>
      <div
        className={`${
          i18n.language === 'he'
            ? 'flex-col lg:flex-row-reverse'
            : 'flex-col lg:flex-row'
        } w-full flex text-white mt-8`}
      >
        <div
          data-aos='zoom-in-right'
          data-aos-duration='1000'
          className='transform transition duration-500 hover:!scale-105 cursor-pointer shadow-lg shadow-secondary w-full lg:w-1/2 border-4 border-primary p-5 mr-10'
        >
          <h1 className='text-xl xl:text-2xl font-semibold mb-3'>
            {t('privacySection1')}
          </h1>
          <p className='leading-[1.2] text-gray-300 text-base xl:text-lg'>
            {t('privacySection1Desc1')}
          </p>
          <p className='leading-[1.2] text-gray-300 text-base xl:text-lg mt-2'>
            {t('privacySection1Desc2')}
          </p>
        </div>
        <div
          data-aos='zoom-in-left'
          data-aos-duration='1000'
          className='transform transition duration-500 hover:!scale-105 cursor-pointer w-full lg:w-1/2 border-4 border-primary shadow-lg shadow-secondary p-5 mr-10 mt-8 lg:mt-0'
        >
          <h1 className='text-xl xl:text-2xl font-semibold mb-3'>
            {t('privacySection2')}
          </h1>
          <p className='leading-[1.2] text-gray-300 text-base xl:text-lg'>
            {t('privacySection2Desc1')}
          </p>
        </div>
      </div>
      <p className='text-xl xl:text-2xl text-center leading-[1.3] mt-16'>
        {t('faqQuestion1')}
      </p>
      <p className='text-xl xl:text-2xl text-center leading-[1.3] mt-1'>
        {t('faqQuestion2')}
      </p>
    </div>
  );
}

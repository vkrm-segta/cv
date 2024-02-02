'use client';
import React, { useState } from 'react';
import { PiListChecksBold } from 'react-icons/pi';
import { CgDetailsMore } from 'react-icons/cg';
import { TbPhoneCheck } from 'react-icons/tb';
import { MdPayment } from 'react-icons/md';
import Plans from './Plans';
import VerifyPhone from './VerifyPhone';
import { useTranslation } from 'next-i18next';

export default function Register() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);

  return (
    <div className='w-full min-h-screen bg-[#F2F9F9] flex flex-col text-black px-5 sm:px-20 lg:px-40 py-5'>
      <div className='w-full relative text-center py-10'>
        <h1 className='text-4xl font-semibold'>{t('register')}</h1>
        <p className='text-xl text-gray-700 mt-1'>{t('followAll')}</p>
      </div>
      <div
        className={`${
          i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
        } flex items-center`}
      >
        <div className='w-[8%] lg:w-[12%] h-1 bg-primary' />
        <div className='relative w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-full bg-primary'>
          <PiListChecksBold className='text-xl lg:text-3xl text-white' />
          <p className='absolute top-12 text-primary font-semibold text-xl'>
            {t('plans')}
          </p>
        </div>
        <div
          className={`${
            page <= 1 ? 'bg-[#ada9a9]' : 'bg-primary transition-bg duration-500'
          } w-[12%] lg:w-[20%] h-1`}
        />
        <div
          className={`${
            page <= 1 ? 'bg-[#ada9a9]' : 'bg-primary transition-bg duration-500'
          } relative w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-full bg-primary`}
        >
          <CgDetailsMore size={30} className='text-white' />
          <p
            className={`${
              page <= 1 ? 'text-[#ada9a9]' : 'text-primary font-semibold'
            } absolute top-12 text-primary text-xl`}
          >
            {t('details')}
          </p>
        </div>
        <div
          className={`${
            page <= 2 ? 'bg-[#ada9a9]' : 'bg-primary transition-bg duration-500'
          } w-[12%] lg:w-[20%] h-1`}
        />
        <div
          className={`${
            page <= 2 ? 'bg-[#ada9a9]' : 'bg-primary transition-bg duration-500'
          } relative w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-full bg-primary`}
        >
          <TbPhoneCheck size={30} className='text-white' />
          <p
            className={`${
              page <= 2 ? 'text-[#ada9a9]' : 'text-primary font-semibold'
            } absolute leading-[1.1] top-12 text-primary text-xl`}
          >
            {t('phoneVerify')}
          </p>
        </div>
        <div
          className={`${
            page <= 3 ? 'bg-[#ada9a9]' : 'bg-primary transition-bg duration-500'
          } w-[12%] lg:w-[20%] h-1`}
        />
        <div
          className={`${
            page <= 3 ? 'bg-[#ada9a9]' : 'bg-primary transition-bg duration-500'
          } relative w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-full bg-primary`}
        >
          <MdPayment size={30} className='text-white' />
          <p
            className={`${
              page <= 3 ? 'text-[#ada9a9]' : 'text-primary font-semibold'
            } absolute leading-[1.1] top-12 text-primary text-xl`}
          >
            {t('payment')}
          </p>
        </div>
        <div
          className={`${
            page <= 3 ? 'bg-[#ada9a9]' : 'bg-primary transition-bg duration-500'
          } w-[8%] lg:w-[12%] h-1`}
        />
      </div>

      {page === 1 && <Plans page='register' />}
      {page === 2 && (
        <div className={`w-full flex justify-center mt-24 mb-5 lg:mb-0`}>
          <div className='lg:w-[60%] bg-primary rounded-lg p-8'>
            <div
              className={`${
                i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
              } w-full flex`}
            >
              <div
                className={`${i18n.language === 'he' ? 'ml-5' : 'mr-5'} w-1/2`}
              >
                <p
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } text-white font-semibold mb-1`}
                >
                  {t('name')}
                </p>
                <input
                  type='text'
                  placeholder={t('enterName')}
                  className='w-full outline-none bg-white rounded-md px-5 py-2'
                  dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
                />
              </div>
              <div className='w-1/2'>
                <p
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } text-white font-semibold mb-1`}
                >
                  {t('email')}
                </p>
                <input
                  type='text'
                  placeholder={t('enterEmail')}
                  className='w-full outline-none bg-white rounded-md px-5 py-2'
                  dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>
            <div
              className={`${
                i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
              } w-full flex mt-5`}
            >
              <div
                className={`${i18n.language === 'he' ? 'ml-5' : 'mr-5'} w-1/2`}
              >
                <p
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } text-white font-semibold mb-1`}
                >
                  {t('selectGender')}
                </p>
                <select
                  dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
                  className='w-full outline-none bg-white rounded-md px-5 py-2'
                >
                  <option disabled className='text-gray-500'>
                    {t('selectGender')}
                  </option>
                  <option>{t('male')}</option>
                  <option>{t('female')}</option>
                </select>
              </div>
              <div className='w-1/2'>
                <p
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } text-white font-semibold mb-1`}
                >
                  {t('jobTarget')}
                </p>
                <input
                  type='text'
                  placeholder={t('enterJobTarget')}
                  className='w-full outline-none bg-white rounded-md px-5 py-2'
                  dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>
            <div
              className={`${
                i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
              } w-full flex mt-5`}
            >
              <div
                className={`${i18n.language === 'he' ? 'ml-5' : 'mr-5'} w-1/2`}
              >
                <p
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } text-white font-semibold mb-1`}
                >
                  {t('dob')}
                </p>
                <input
                  type='date'
                  placeholder='Date Of Birth'
                  className='w-full outline-none bg-white rounded-md px-5 py-2'
                  dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
                />
              </div>
              <div className='w-1/2'>
                <p
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } text-white font-semibold mb-1`}
                >
                  {t('selectLang')}
                </p>
                <select
                  dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
                  className='w-full outline-none bg-white rounded-md px-5 py-2'
                >
                  <option disabled className=' text-gray-500'>
                    {t('selectLang')}
                  </option>
                  <option>{t('english')}</option>
                  <option>{t('hebrew')}</option>
                </select>
              </div>
            </div>
            <div
              className={`${
                i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
              } w-full flex items-center mt-5`}
            >
              <div className='w-4 h-4'>
                <input type='checkbox' className='w-full h-full' />
              </div>
              <p
                className={`${
                  i18n.language === 'he' ? 'mr-3' : 'ml-3'
                } text-white mt-0.5`}
              >
                {t('siteRegulation')}
              </p>
            </div>
            <div
              className={`${
                i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
              } w-full flex items-center mt-1`}
            >
              <div className='w-4 h-4'>
                <input type='checkbox' className='w-full h-full' />
              </div>
              <p
                className={`${
                  i18n.language === 'he' ? 'mr-3' : 'ml-3'
                } text-white mt-0.5`}
              >
                {t('shareCv')}
              </p>
            </div>
            <div
              className={`${
                i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
              } flex items-center mt-1`}
            >
              <div className='w-4 h-4'>
                <input type='checkbox' className='w-full h-full' />
              </div>
              <p
                className={`${
                  i18n.language === 'he' ? 'mr-3' : 'ml-3'
                } text-white mt-0.5`}
              >
                {t('marketingContent')}
              </p>
            </div>
          </div>
        </div>
      )}
      {page === 3 && <VerifyPhone />}
      {page === 4 && (
        <div className='w-full flex justify-center mt-24'>
          <div className='w-[60%] bg-primary rounded-lg text-2xl text-white p-8'>
            {t('payment')}
          </div>
        </div>
      )}
      <div
        className={`${
          i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
        } w-full flex mt-auto`}
      >
        {page > 1 && (
          <button
            onClick={() => {
              if (page <= 1) return;
              setPage((prev) => prev - 1);
            }}
            className='font-medium bg-primary text-white rounded-full px-5 py-3'
          >
            {t('back')}
          </button>
        )}
        <button
          onClick={() => {
            if (page >= 4) return;
            setPage((prev) => prev + 1);
          }}
          className={`${
            i18n.language === 'he' ? 'mr-auto' : 'ml-auto'
          } font-medium bg-primary text-white rounded-full px-5 py-3`}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
}

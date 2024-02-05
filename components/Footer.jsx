'use client';
import React from 'react';
import { IoMail } from 'react-icons/io5';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiInstagram } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className='w-full text-white bg-tertiary/80 text-center py-5 px-5 overflow-hidden'>
      <h1 className='text-primary text-lg lg:text-xl font-semibold mb-2'>
        {t('followUs')}
      </h1>
      <div className='flex items-center justify-center gap-2 lg:gap-5 pb-5'>
        <button className='w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 text-white bg-primary'>
          <IoMail className='text-xl lg:text-3xl' />
        </button>
        <button className='w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 text-white bg-primary'>
          <IoLogoWhatsapp className='text-xl lg:text-3xl' />
        </button>
        <button className='w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 text-white bg-primary'>
          <FaFacebook className='text-xl lg:text-3xl' />
        </button>
        <button className='w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 text-white bg-primary'>
          <SiInstagram className='text-xl lg:text-3xl' />
        </button>
        <button className='w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 text-white bg-primary'>
          <FaTwitter className='text-xl lg:text-3xl' />
        </button>
        <button className='w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 text-white bg-primary'>
          <FaLinkedin className='text-xl lg:text-3xl' />
        </button>
      </div>
      <p className='text-primary text-sm lg:text-base px-6'>{t('footer')}</p>
    </div>
  );
}

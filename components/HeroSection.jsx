'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdWifi } from 'react-icons/md';
import { IoBatteryFull } from 'react-icons/io5';
import { FaAngleLeft } from 'react-icons/fa6';
import { PiVideoCamera } from 'react-icons/pi';
import { BsTelephone } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';
import { HiOutlineCamera } from 'react-icons/hi';
import { IoMicOutline } from 'react-icons/io5';
import { FaRegNoteSticky } from 'react-icons/fa6';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import TypewriterText from './TypewriterText';

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const messages = [
    { role: 'USER', text: 'Message 1' },
    { role: 'SHAKED', text: 'Message 2' },
    { role: 'USER', text: 'Message 3' },
    { role: 'SHAKED', text: 'Message 4' },
    { role: 'USER', text: 'Message 5' },
    { role: 'SHAKED', text: 'Message 6' },
    { role: 'USER', text: 'Message 7' },
    { role: 'SHAKED', text: 'Message 8' },
    { role: 'USER', text: 'Message 9' },
    { role: 'SHAKED', text: 'Message 10' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [startIndex]);

  return (
    <div className='relative w-full h-fit lg:min-h-[98vh] flex justify-center border-b-4 border-secondary px-5 lg:px-20 xl:px-40 pt-[5.2rem] pb-0 overflow-hidden'>
      <video
        className='absolute w-full h-full object-cover opacity-80'
        autoPlay
        loop
        muted
      >
        <source src='/test3.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* <Image
        className='absolute w-full h-full object-cover opacity-90'
        src='/phone-bg3.jpg'
        alt='Logo'
        width={2100}
        height={2100}
        priority
      /> */}
      <div
        className={`${
          i18n.language === 'he'
            ? 'flex-col lg:flex-row-reverse'
            : 'flex-col lg:flex-row'
        } w-full flex`}
      >
        <div className='w-full lg:w-1/2 flex justify-center items-center py-10 lg:pr-10'>
          <div className='z-10 text-white'>
            <h1
              className={`${
                i18n.language === 'he'
                  ? 'text-center lg:text-right'
                  : 'text-center lg:text-left'
              } text-4xl lg:text-5xl xl:text-[4.3rem] font-extrabold lg:leading-[1] text-left`}
            >
              {t('stepWithUs')}{' '}
              <p className='text-secondary cursor-pointer'>{t('cvCreation')}</p>
            </h1>
            <p
              className={`${
                i18n.language === 'he'
                  ? 'text-center lg:text-right'
                  : 'text-center lg:text-left'
              } text-xl xl:text-2xl leading-[1.1] mt-5`}
            >
              {t('experienceTheMagic')}
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className='flex items-center z-10'>
            <div className='w-[19.5rem] h-[40rem] flex flex-col justify-center items-center rounded-[2.7rem] shadow-inner shadow-secondary bg-gradient-to-b from-[#0071AE] via-secondary to-[#0071AE] overflow-hidden lg:mx-10'>
              <div className='relative w-[18.2rem] h-[39rem] flex flex-col items-center justify-center rounded-[2.3rem] bg-[#000000b8] shadow-inner sha shadow-secondary my-2.5 overflow-hidden'>
                {/* <video
                  className='absolute w-full h-full object-cover'
                  autoPlay
                  loop
                  muted
                >
                  <source src='/test.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video> */}
                {/* <Image
                  className='absolute w-full h-full object-cover'
                  src='/iPhone-bg.png'
                  alt='Logo'
                  width={2100}
                  height={2100}
                  priority
                /> */}
                <div className='top-3 absolute flex flex-col items-center w-full'>
                  <div className='w-[85%] flex justify-between'>
                    <div className='w-fit text-[15px] text-white mr-3'>
                      {moment().format('hh:mm')}
                    </div>
                    <div className='flex items-center w-20 h-5 rounded-full bg-black px-2'>
                      <Image
                        className='object-cover w-3 h-3 ml-auto opacity-70'
                        src='/camera.png'
                        alt='Logo'
                        width={2100}
                        height={2100}
                        priority
                      />
                    </div>
                    <div className='flex text-white'>
                      <MdWifi size={20} className='mr-2' />
                      <IoBatteryFull size={24} />
                    </div>
                  </div>
                  <div className='w-[95%] flex items-center justify-between mt-3'>
                    <div className='flex items-center'>
                      <FaAngleLeft size={22} className='text-[#0071AE]' />
                      <Image
                        className='object-cover w-6 h-6 ml-1 mr-3'
                        src='/logo.png'
                        alt='Logo'
                        width={2100}
                        height={2100}
                        priority
                      />
                      <h1 className='text-white'>CV.Ai</h1>
                    </div>
                    <div className='flex items-center'>
                      <PiVideoCamera
                        size={25}
                        className='text-[#0071AE] mr-5'
                      />
                      <BsTelephone
                        size={20}
                        className='text-[#0071AE] mr-1.5'
                      />
                    </div>
                  </div>
                </div>
                <div className='relative w-full flex items-center justify-center pb-2 mt-14'>
                  {/* <Image
                    className='absolute w-full h-full object-cover'
                    src='/phone-bg.jpg'
                    alt='Logo'
                    width={2100}
                    height={2100}
                    priority
                  /> */}
                  <div
                    className='w-[16rem] h-[25.5rem] z-20 flex flex-col justify-center overflow-hidden mb-6 px-2 pb-2'
                    ref={containerRef}
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {Array.from({ length: 10 }).map((_, index) => {
                      const messageIndex =
                        (startIndex + index) % messages.length;
                      const message = messages[messageIndex];

                      return (
                        <div
                          key={index}
                          className={`w-[70%] rounded-lg shadow-md shadow-secondary text-white ${
                            message.role === 'USER'
                              ? 'bg-[#00000063]'
                              : 'bg-[#00000063] ml-auto'
                          } px-5 py-2 mt-2`}
                        >
                          <h1 className='text-sm text-gray-400'>
                            {message.role}
                          </h1>
                          <p className='leading-[1.25] mt-1'>{message.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='w-[95%] flex items-center justify-between mt-1'>
                  <div className='w-full flex items-center'>
                    <div>
                      <BsPlus size={30} className='text-[#0071AE] mr-1' />
                    </div>
                    <div className='w-[80%] shadow-md border rounded-full bg-white px-2.5 py-1'>
                      <FaRegNoteSticky
                        size={20}
                        className='text-[#0071AE] ml-auto'
                      />
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <HiOutlineCamera
                      size={25}
                      className='text-[#0071AE] mr-2'
                    />
                    <IoMicOutline size={20} className='text-[#0071AE] mr-1.5' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

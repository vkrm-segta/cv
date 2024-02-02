'use client';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Privacy from './Privacy';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function Faq() {
  const { t, i18n } = useTranslation();
  const [selectedQuestion, setSelectQuestion] = useState(null);

  const questionAnswer = [
    {
      question: t('question1'),
      answer: t('answer1'),
    },
    {
      question: t('question2'),
      answer: t('answer2'),
    },
    {
      question: t('question3'),
      answer: t('answer3'),
    },
    {
      question: t('question4'),
      answer: t('answer4'),
    },
    {
      question: t('question5'),
      answer: t('answer5'),
    },
    {
      question: t('question6'),
      answer: t('answer6'),
    },
    {
      question: t('question7'),
      answer: t('answer7'),
    },
    {
      question: t('question8'),
      answer: t('answer8'),
    },
    {
      question: t('question9'),
      answer: t('answer9'),
    },
    {
      question: t('question10'),
      answer: t('answer10'),
    },
  ];

  return (
    <div id='faqSection' className='relative w-full'>
      {/* <Image
        className='z-20 right-0 absolute w-[100vw] h-full object-fill opacity-100'
        src='/bg1.jpg'
        alt='Logo'
        width={2100}
        height={2100}
        priority
      /> */}
      <div className='relative w-full min-h-[91vh] text-white flex flex-col z-20 px-5 lg:px-20 xl:px-40 py-28 overflow-hidden'>
        <h1
          data-aos='zoom-in-right'
          data-aos-duration='1000'
          className='text-4xl lg:text-5xl xl:text-6xl text-center text-secondary font-bold'
        >
          {t('faq&Privacy')}
        </h1>
        <Privacy />
        <div data-aos='zoom-in-down' data-aos-duration='1000' className='my-16'>
          {questionAnswer.map((item, index) => (
            <div
              key={index}
              className='relative flex flex-col items-center'
              onMouseEnter={() => setSelectQuestion(index)}
              onMouseLeave={() => setSelectQuestion(null)}
            >
              <div
                className={`${
                  selectedQuestion === index
                    ? 'w-[92%] text-gray-300 border-[4px] border-primary mt-4'
                    : 'w-[90%] text-white bg-primary mt-2'
                } ${
                  i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
                } flex justify-between items-center lg:items-start cursor-pointer py-4 px-5 lg:px-10`}
              >
                <p
                  className={`${
                    i18n.language === 'he' ? 'ml-2' : 'mr-2'
                  } text-base xl:text-lg font-medium leading-[1.2]`}
                >
                  {`${item.question}`}
                </p>
                {selectedQuestion === index ? (
                  <div>
                    <FaAngleUp size={20} />
                  </div>
                ) : (
                  <div>
                    <FaAngleDown size={20} />
                  </div>
                )}
              </div>
              {selectedQuestion === index && (
                <div
                  className={`${
                    i18n.language === 'he' ? 'text-right' : 'text-left'
                  } w-[95%] bg-[#F2F9F9] text-black text-base xl:text-lg leading-[1.2] transition-all opacity-100 py-4 px-5 lg:px-14 my-3 z-10`}
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

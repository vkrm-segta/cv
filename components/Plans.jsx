'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'next-i18next';

export default function Plans({ page }) {
  const { t, i18n } = useTranslation();
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  const plansData = [
    {
      title: t('plan1Title'),
      name: 'Michal',
      plan: t('plan1'),
      price: '$100',
      image: '/user1.jpg',
      features: [
        t('plan1Feature1'),
        t('plan1Feature2'),
        t('plan1Feature3'),
        t('plan1Feature4'),
        t('plan1Feature5'),
      ],
    },
    {
      title: t('plan2Title'),
      name: 'Tom',
      plan: t('plan2'),
      price: '$300',
      image: '/user2.jpg',
      features: [
        t('plan2Feature1'),
        t('plan2Feature2'),
        t('plan2Feature3'),
        t('plan2Feature4'),
        t('plan2Feature5'),
      ],
    },
    {
      title: t('plan3Title'),
      name: 'Ben',
      plan: t('plan3'),
      price: '$500',
      image: '/user3.jpg',
      features: [
        t('plan3Feature1'),
        t('plan3Feature2'),
        t('plan3Feature3'),
        t('plan3Feature4'),
        t('plan3Feature5'),
      ],
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id='planSection' className='relative'>
      {/* {page !== 'register' && (
        <Image
          className='z-0 right-0 absolute w-[100vw] h-full object-fill opacity-100'
          src='/bg.jpg'
          alt='Logo'
          width={2100}
          height={2100}
          priority
        />
      )} */}
      <div
        className={`${
          page === 'register'
            ? 'text-black px-0 mt-16'
            : 'text-white px-5 lg:px-20 xl:px-40 mt-20'
        } w-full flex flex-col items-center justify-center py-10`}
      >
        {!page && (
          <h1
            data-aos='fade-up'
            className='z-20 text-center text-4xl lg:text-5xl xl:text-6xl text-secondary font-extrabold mb-20'
          >
            {t('subPlans')}
          </h1>
        )}
        <div
          className={`${
            i18n.language === 'he'
              ? 'flex-col lg:flex-row-reverse'
              : 'flex-col lg:flex-row'
          } z-20 w-full flex justify-around overflow-hidden`}
        >
          {plansData.map((plan, index) => (
            <div
              key={index}
              className='w-full lg:w-[30%] flex flex-col hover:!scale-105 rounded-3xl cursor-pointer overflow-hidden m-10'
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              data-aos='zoom-in-left'
              data-aos-duration='1000'
            >
              <div
                className={`${
                  hovered === index && page === 'register' && selected !== index
                    ? 'transition-bg duration-300 pb-5'
                    : 'text-black rounded-t-2xl'
                } ${page === 'register' && 'pb-5 rounded-2xl'} ${
                  selected === index ? 'bg-[#0071aec2]' : ''
                } flex flex-col items-center bg-gradient-to-bl from-secondary via-tertiary to-primary px-8 pt-5 pb-3`}
                onClick={() => {
                  if (page === 'register') {
                    setSelected(index);
                  }
                }}
              >
                <h1 className='text-center text-xl xl:text-[1.6rem] font-semibold'>
                  {plan.title}
                </h1>
                <Image
                  className='relative w-24 h-24 object-cover rounded-full my-3'
                  src={plan.image}
                  alt='Logo'
                  width={2100}
                  height={2100}
                  priority
                />
                <p className='text-center text-xl xl:text-2xl'>{plan.name}</p>
                <p
                  className={`${
                    hovered === index &&
                    page === 'register' &&
                    selected !== index
                      ? 'text-gray-600'
                      : 'text-gray-700'
                  } text-center`}
                >
                  {plan.plan}
                </p>
              </div>
              {!page && (
                <div
                  className={`${
                    i18n.language === 'he' ? 'flex-col' : 'flex-col'
                  } flex h-full rounded-b-3xl border-b-4 border-r-4 border-l-4 border-primary px-5`}
                >
                  <div
                    className={`${
                      page === 'register' ? 'text-black' : 'text-black'
                    }`}
                  >
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`${
                          i18n.language === 'he'
                            ? 'flex-row-reverse text-right'
                            : 'flex-row text-left'
                        } flex mt-5`}
                      >
                        <div>
                          <GoDotFill size={20} className='mt-[1px]' />
                        </div>
                        <p
                          className={`${
                            i18n.language === 'he' ? 'mr-3' : 'ml-3'
                          } text-sm xl:text-base`}
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-col items-center text-black p-5 mt-auto'>
                    <p className='text-xl xl:text-2xl'>
                      {t('price')}: {plan.price}
                    </p>
                    <button
                      data-aos='zoom-in'
                      className='w-full text-white transition-all duration-500 hover:transition-all hover:duration-500 hover:!scale-110 font-medium hover:ring-4 hover:ring-offset-0 hover:ring-[#fff] hover:ring-opacity-20 hover:shadow-md hover:shadow-[#fff] bg-gradient-to-bl from-primary to-[#0071AE] hover:text-white rounded-full mt-2 py-2'
                    >
                      {t('subscribe')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

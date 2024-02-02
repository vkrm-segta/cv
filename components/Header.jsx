'use client';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { MdOutlineMenu } from 'react-icons/md';
import { useState } from 'react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const pathName = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);

  const routes = [
    {
      name: t('ourPlans'),
      route: 'planSection',
    },
    {
      name: t('howItWorks'),
      route: 'howItWorks',
    },
    {
      name: t('faq&Privacy'),
      route: 'faqSection',
    },
    {
      name: t('aboutUs'),
      route: 'aboutUs',
    },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      className={`${
        i18n.language === 'he'
          ? 'flex-col lg:flex-row-reverse'
          : 'flex-col lg:flex-row'
      } ${
        openSidebar ? 'opacity-90 rounded-b-2xl' : 'opacity-90'
      } z-30 fixed top-0 right-0 w-full flex justify-between items-center text-white bg-gradient-to-br from-primary to-tertiary shadow-md shadow-[#F2F9F9] py-1.5 px-5 lg:px-20 xl:px-40`}
    >
      <div
        className={`${
          i18n.language === 'he'
            ? 'flex-row-reverse lg:flex-row'
            : 'flex-row lg:flex-col'
        } w-full lg:w-fit flex items-center justify-between lg:justify-start`}
      >
        <button className='py-1' onClick={() => scrollToSection('heroSection')}>
          <Image
            className='object-cover w-16 h-16'
            src='/logo.png'
            alt='Logo'
            width={2100}
            height={2100}
            priority
          />
        </button>
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className='flex lg:hidden'
        >
          <MdOutlineMenu size={30} className='' />
        </button>
      </div>
      <div
        className={`${
          i18n.language === 'he'
            ? 'flex-col lg:flex-row-reverse'
            : 'flex-col lg:flex-row'
        } ${
          openSidebar ? 'flex pb-10 -mt-5' : 'hidden'
        } lg:flex items-center text-base xl:text-xl`}
      >
        {routes.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.route)}
            className={`${
              item.route === pathName
                ? 'border-b-2 border-[#dedede] text-[#dedede] hover:pb-0'
                : 'text-black hover:pb-1'
            } ${
              openSidebar ? 'py-1' : 'py-0'
            } relative overflow-hidden hover:text-[#474747] focus:outline-none group mr-0 lg:mr-5 xl:mr-10`}
          >
            {item.route !== pathName && (
              <span className='absolute inset-0 border-b-2 border-[#474747] w-0 transition-all origin-center group-hover:w-full'></span>
            )}
            {item.name}
          </button>
        ))}
        <Link
          href='/register'
          className={`${
            i18n.language === 'he' ? 'mr-0 lg:mr-4 xl:mr-7' : 'mr-0'
          } text-black text-base transition-all duration-500 hover:transition-all hover:duration-500 hover:scale-110 font-medium hover:ring-4 ring-2 ring-primary hover:ring-offset-0 hover:ring-[#fff] hover:ring-opacity-20 hover:shadow-md hover:shadow-[#fff] hover:bg-secondary bg-gradient-to-bl from-primary to-[#0071AE] rounded-full px-4 xl:px-7 py-3`}
        >
          {t('signUp')}
        </Link>
        <Dropdown />
      </div>
    </div>
  );
}

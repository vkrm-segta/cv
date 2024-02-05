'use client';
import React, { useEffect, useState } from 'react';
import { TbWorld } from 'react-icons/tb';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Image from 'next/image';
import LanguageChanger from './LanguageChanger';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  useEffect(() => {
    currentLocale === 'en'
      ? setSelectedLang(t('english'))
      : setSelectedLang(t('hebrew'));
  }, []);

  const languages = [
    {
      name: t('english'),
      flag: '/uk.svg',
      lang: 'en',
    },
    {
      name: t('hebrew'),
      flag: '/israel.svg',
      lang: 'he',
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLang = (item) => {
    setSelectedLang(item.name);

    const newLocale = item.lang;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block text-left'>
      <button
        type='button'
        className={`${
          i18n.language === 'he' ? 'mr-0 lg:mr-4 xl:mr-7' : 'ml-0 lg:ml-4 xl:ml-7'
        } inline-flex items-center text-base text-white py-2 mb-3 lg:mb-0`}
        onClick={toggleDropdown}
      >
        <TbWorld className='text-base' />
        <p className='px-2'>{selectedLang}</p>
        {isOpen ? (
          <FaAngleUp className='text-base' />
        ) : (
          <FaAngleDown className='text-base' />
        )}
      </button>

      {isOpen && (
        <div className='origin-top-right absolute  w-40 xl:w-32 -right-6 lg:-right-4 -mt-3 lg:mt-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <div className='py-1'>
            {languages.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleSelectLang(item)}
                className={`${
                  selectedLang === item.name
                    ? 'bg-secondary cursor-default'
                    : 'bg-white cursor-pointer'
                } ${
                  i18n.language === 'he' ? 'flex-row-reverse' : 'flex-row'
                } w-full flex items-center text-sm text-gray-700 hover:text-gray-900 px-4 py-1`}
                disabled={selectedLang === item.name}
              >
                <Image
                  className='relative w-5 xl:w-5 h-5'
                  src={item.flag}
                  alt='Logo'
                  width={28}
                  height={28}
                  priority
                />
                <p
                  className={`${
                    i18n.language === 'he' ? 'mr-3' : 'ml-3'
                  } text-base`}
                >
                  {item.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

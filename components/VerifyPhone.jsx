'use client';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function VerifyPhone() {
  const { t, i18n } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpModal, setOtpModal] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Ensure the value is a number and update the state accordingly
    if (/^\d*$/.test(value) && index >= 0 && index < 4) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      // Move focus to the next input
      if (value !== '' && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };
  const handleSubmit = () => {
    if (phoneNumber) setOtpModal(!otpModal);
  };

  return (
    <div className='w-full flex justify-center mt-24'>
      <div className='lg:w-[60%] flex justify-center rounded-lg p-8'>
        {!otpModal ? (
          <div className='w-full flex flex-col'>
            <div className='w-full mr-5'>
              <p
                className={`${
                  i18n.language === 'he' ? 'text-right' : 'text-left'
                } text-black font-semibold mb-1`}
              >
                {t('phoneNumber')}
              </p>
              <input
                type='number'
                placeholder={t('enterPhoneNumber')}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='w-full outline-none bg-white border-2 border-primary rounded-md px-5 py-2'
                dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
              />
            </div>
            <button
              onClick={handleSubmit}
              className='font-medium bg-primary text-white rounded-full px-5 py-2.5 mt-8'
            >
              {t('sendOtp')}
            </button>
          </div>
        ) : (
          <div className='lg:w-[40%] flex flex-col items-center bg-primary rounded-lg p-8'>
            <div className='flex flex-col items-center justify-center'>
              <p
                className={`${
                  i18n.language === 'he' ? 'text-right' : 'text-left'
                } text-white text-xl font-semibold mb-3`}
              >
                {t('enterOtp')}
              </p>
              <div className='flex'>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    placeholder='0'
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    className='w-10 outline-none bg-white text-center border-2 border-primary rounded-md px-1 py-2'
                    maxLength='1'
                    dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
                  />
                ))}
              </div>
            </div>
            {/* <button
              onClick={handleSubmit}
              className='w-full font-medium bg-white text-black rounded-full px-5 py-2.5 mt-8'
            >
              Submit
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
}

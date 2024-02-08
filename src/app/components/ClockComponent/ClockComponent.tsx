"use client"
import React, { useEffect, useState } from 'react'
import { ClockContainer, CustomClock } from './styles'
import { Transition } from "@headlessui/react";
import 'react-clock/dist/Clock.css'

const ClockComponent = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0">
      <ClockContainer>
        <p className='text-2xl font-semibold text-blue-500 text-center'>Europe/Amsterdam</p>
        <div className='flex justify-center my-6'>
          <CustomClock value={value} />
        </div>
        <p className='text-xl text-blue-400 text-center'>Miercoles 08 de Febrero de 2024</p>
        <p className='text-xl text-blue-400 text-center'>03:15:34 pm</p>

        <div className='my-4 flex justify-center'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>View details</button>
        </div>
      </ClockContainer>
    </Transition>
  )
}

export default ClockComponent;

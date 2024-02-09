"use client";
import React, { useEffect, useState, FC } from "react";
import { ClockContainer, CustomClock, BackgroundContainer } from "./styles";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import TimeZone from "../../utils/interfaces/time-zone";
import "react-clock/dist/Clock.css";

interface ClockComponentProps {
  data: TimeZone;
}

const ClockComponent: FC<ClockComponentProps> = ({
  data,
}: ClockComponentProps) => {
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
        {/* <BackgroundContainer> */}
        <p className="text-2xl font-semibold text-blue-50 text-center">
          Europe/Amsterdam
        </p>
        <div className="flex justify-center my-6">
          <CustomClock value={value} />
        </div>
        <p className="text-xl text-blue-50 text-center">
          Miercoles 08 de Febrero de 2024
        </p>
        <p className="text-xl text-blue-50 text-center">03:15:34 pm</p>

        <div className="my-4 flex justify-center">
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            href={{
              pathname: "/detail",
              query: { zone: "Europe/Amsterdan" },
            }}>
            View details
          </Link>
        </div>
        {/* </BackgroundContainer> */}
      </ClockContainer>
    </Transition>
  );
};

export default ClockComponent;

"use client";
import React, { useEffect, useState, FC, useRef } from "react";
import { ClockContainer, CustomClock, BackgroundContainer } from "./styles";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import TimeZone from "../../utils/interfaces/time-zone";
import { format } from 'date-fns';
import _ from 'lodash';
import "react-clock/dist/Clock.css";

interface ClockComponentProps {
  data: TimeZone;
}

function useDeepCompareMemoize<T>(value: T): T {
  const ref = useRef<T>();

  if (!_.isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current!;
}

const Clock: FC<{ initialDate: Date }> = ({ initialDate }) => {
  const [value, setValue] = useState(initialDate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(prevValue => new Date(prevValue.getTime() + 1000));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <CustomClock value={value} />;
};

const ClockComponent: FC<ClockComponentProps> = ({ data }) => {
  const memoizedData: TimeZone = useDeepCompareMemoize(data);
  const { datetime, timezone } = memoizedData;
  const initialDate = datetime ? new Date(datetime.date_time_txt) : new Date();
  const formattedDateTxt = format(datetime?.date_time_txt ?? '', 'PPPPP');
  const formattedTimeTxt = format(datetime?.date_time_txt ?? '', 'p');

  return (
    <Transition
      appear={true}
      show={true}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <ClockContainer>
        <p className="text-2xl font-semibold text-blue-50  break-words text-pretty text-center">
         {timezone?.id}
        </p>
        <div className="flex justify-center my-6">
          <Clock initialDate={initialDate} />
        </div>
        <p className="text-xl text-blue-50 text-center">
         {formattedDateTxt}
        </p>
        <p className="text-xl text-blue-50 text-center">{formattedTimeTxt}</p>
        <div className="my-4 flex justify-center">
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            href={{
              pathname: "/detail",
              query: { zone: timezone?.id },
            }}>
            View details
          </Link>
        </div>
      </ClockContainer>
    </Transition>
  );
};

export default React.memo(ClockComponent);
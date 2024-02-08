"use client";
import React from "react";
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import IZone from "utils/types/zones";
import {
  AutoCompleteInput,
  AutoCompleteOptions,
  AutoCompleteLabel,
} from "./styles";

type AutoCompleteComponentProps<IZone> = {
  options: IZone[];
};

const AutoCompleteComponent = ({
  options,
}: AutoCompleteComponentProps<IZone>): React.ReactElement => {
  const [selectedVal, setSelectedVal] = useState([]);

  return (
    <Combobox value={selectedVal} onChange={setSelectedVal} multiple>
      <AutoCompleteLabel>Search time/zone:</AutoCompleteLabel>
      <AutoCompleteInput />


      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
        <AutoCompleteOptions>
          {options.map((option) => (
            <Combobox.Option key={option.id} value={option}>
              {option.name}
            </Combobox.Option>
          ))}
        </AutoCompleteOptions>
      </Transition>
      {selectedVal.length > 0 && (
        <div className="flex gap-2">
          {selectedVal.map((option) => (
            <div
              key={option.id}
              data-dismissible="chip"
              className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-blue-400 py-1.5 px-3 my-4 font-sans text-xs font-bold uppercase text-white">
              <span className="mr-5">{option.name}</span>
              <button
                data-dismissible-target="chip"
                className="!absolute  top-2/4 right-1 mx-px h-5 max-h-[32px] w-5 max-w-[32px] -translate-y-2/4 select-none rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  x
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
    </Combobox>
  );
};

export default AutoCompleteComponent;

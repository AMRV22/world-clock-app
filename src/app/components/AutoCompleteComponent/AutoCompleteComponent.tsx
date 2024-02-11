"use client";
import React from "react";
import { useState, FC, Fragment, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { RiCloseCircleLine } from "@remixicon/react";
import TAutoComplete from "@/app/utils/types/autocomplete";

import {
    AutoCompleteInput,
    AutoCompleteOptions,
    AutoCompleteLabel,
    AutoCompleteOption,
} from "./styles";

import { CustomChipButton, CustomChipComponent } from "../StyledComponents/elements/chip";




interface AutoCompleteComponentProps {
    options: TAutoComplete[];
    onChange: (value: TAutoComplete[]) => void;
};

const AutoCompleteComponent: FC<AutoCompleteComponentProps> = ({
    options,
    onChange
}: AutoCompleteComponentProps) => {
    const [selectedVal, setSelectedVal] = useState<TAutoComplete[]>([]);
    const [query, setQuery] = useState('')

    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) =>
                option.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            );

    const deleteSelectedItem = (item: TAutoComplete) => {
        const updatedSelectedVal = selectedVal.filter((val) => val.id !== item.id);
        setSelectedVal(updatedSelectedVal);
        onChange(updatedSelectedVal);
    };


    const handleOnChange = (value: TAutoComplete[]) => {
        setSelectedVal(value);
        onChange(value);
    };

    return (
        <Combobox value={selectedVal} onChange={handleOnChange} multiple>
            <AutoCompleteLabel>Search time/zone:</AutoCompleteLabel>
            <AutoCompleteInput onChange={(event) => setQuery(event.target.value)} />
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}>
                <AutoCompleteOptions>
                    {filteredOptions.map((option) => (
                        <AutoCompleteOption key={option.id} value={option}>
                            {option.name}
                        </AutoCompleteOption>
                    ))}
                </AutoCompleteOptions>
            </Transition>
            {selectedVal.length > 0 && (
                <div className="flex gap-2">
                    {selectedVal.map((option) => (
                        <CustomChipComponent
                            key={option.id}
                        >
                            <span className="mr-5">{option.name}</span>
                            <CustomChipButton
                                onClick={() => deleteSelectedItem(option)}
                                type="button">
                                <RiCloseCircleLine size={20}
                                    color="white"
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                            </CustomChipButton>
                        </CustomChipComponent>
                    ))}
                </div>
            )}
        </Combobox>
    );
};

export default AutoCompleteComponent;

"use client";
import React from "react";
import { useState, FC } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { RiCloseCircleLine } from "@remixicon/react";

import {
    AutoCompleteInput,
    AutoCompleteOptions,
    AutoCompleteLabel,
    AutoCompleteOption,
} from "./styles";

import { CustomChipButton, CustomChipComponent } from "../StyledComponents/elements/chip";

interface IData {
    id: number;
    name: string;
}

interface AutoCompleteComponentProps {
    options: IData[];
};

const AutoCompleteComponent: FC<AutoCompleteComponentProps> = ({
    options,
}: AutoCompleteComponentProps) => {
    const [selectedVal, setSelectedVal] = useState<IData[]>([]);

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

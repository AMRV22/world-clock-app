import styled from "styled-components";
import tw from "twin.macro";
import { Combobox } from "@headlessui/react";

const AutoCompleteInput = styled(Combobox.Input)`
    ${tw`bg-blue-50 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 rounded-full`}
`;

const AutoCompleteOptions = styled(Combobox.Options)`
    ${tw`block appearance-none w-full bg-blue-50 border border-blue-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-50`}
`;

const AutoCompleteLabel = styled(Combobox.Label)`
    ${tw`text-white`}
`;

const AutoCompleteOption = styled(Combobox.Option)`
    ${tw`text-blue-500 cursor-pointer select-none relative py-2 pl-4 pr-4`}
`;


export {
    AutoCompleteInput,
    AutoCompleteOptions,
    AutoCompleteLabel,
    AutoCompleteOption
}
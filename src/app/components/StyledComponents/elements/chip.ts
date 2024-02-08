import styled from "styled-components";
import tw from "twin.macro";

const CustomChipComponent = styled.div`
    ${tw`relative grid select-none rounded-full items-center whitespace-nowrap bg-blue-400 py-1.5 px-3 my-4 font-sans text-xs font-bold uppercase text-white`}
`;

const CustomChipButton = styled.button`
    ${tw`!absolute  top-2/4 right-1 mx-px h-5 max-h-[32px] w-5 max-w-[32px] -translate-y-2/4 select-none rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
`;


export {
    CustomChipComponent,
    CustomChipButton
}
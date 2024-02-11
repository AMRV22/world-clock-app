import styled from "styled-components";
import tw from "twin.macro";

const InfoContainer = styled.div`
    ${tw`flex flex-col  align-middle space-y-4 w-64 h-96 mx-4 p-4  bg-gradient-to-t from-blue-400  to-blue-800  rounded-lg justify-center`}
`;

const MapContainer = styled.div`
    ${tw`flex-auto w-full h-96 md:w-800`}
`;

export {
    InfoContainer,
    MapContainer
}
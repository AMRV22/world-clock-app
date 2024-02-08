import styled from "styled-components";
import tw from "twin.macro";
import Clock from 'react-clock'

const ClockContainer = styled.div`
    ${tw`max-w-sm p-6 bg-gradient-to-t from-blue-400  to-blue-800  rounded-lg shadow justify-center `}
`;

const CustomClock = styled(Clock)`
    .react-clock__second-hand__body{
        background-color: #836BFA;
        width: 5px;
    }
    .react-clock__second-hand__body:after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        left: 50%;
        background-color: #836BFA;
        border-radius: 50%;
        transform: translate(-50%)
    }

    .react-clock__hand__body{
        background-color: #12035E;
    }

    .react-clock__mark__body{
        background-color: #12035E;
        width: 5px;
    }

`

export {
    ClockContainer,
    CustomClock
}
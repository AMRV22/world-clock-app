import styled from "styled-components";
import tw from "twin.macro";
import Clock from 'react-clock'

const ClockContainer = styled.div`
    ${tw`max-w-sm  p-6  justify-center `} 
`;

const BackgroundContainer = styled.div`
    background-image: url('/FondoCity.png');
    background-repeat: no-repeat;
    z-index: 0;
    opacity: 0.9;
`;



const CustomClock = styled(Clock)`
    .react-clock__second-hand__body{
        background-color: #B0A1FC !important;
        width: 5px !important;
    }
    .react-clock__second-hand__body:after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        left: 50%;
        background-color: #B0A1FC;
        border-radius: 50%;
        transform: translate(-50%)
    }

    .react-clock__hand__body{
        background-color: #ffff;
    }

    .react-clock__mark__body{
        background-color: #ffff;
        width: 3px !important;
    }

    .react-clock__face{
        border: 3px solid #ffff;
    }

`

export {
    ClockContainer,
    CustomClock,
    BackgroundContainer
}
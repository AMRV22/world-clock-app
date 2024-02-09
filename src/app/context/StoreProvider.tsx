"use client"
import React from "react";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import IAutoComplete from "@/app/utils/types/autocomplete";

import TimeZone from "../utils/interfaces/time-zone";

interface ContextProps {
    zone: IAutoComplete[],
    setZone: Dispatch<SetStateAction<IAutoComplete[]>>,
    data: TimeZone[],
    setData: Dispatch<SetStateAction<TimeZone[]>>
}

const GlobalContext = createContext<ContextProps>({
    zone: [],
    setZone: () : IAutoComplete[] => [],
    data: [],
    setData: () : TimeZone[] =>   [],
});

export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    const [zone, setZone] = useState<[] | IAutoComplete[]>([]);
    const [data, setData] = useState<[] | TimeZone[]>([]);
    
    return (
        <GlobalContext.Provider value={{ zone, setZone, data, setData }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);
"use client"
import React from 'react'
import { useEffect, useState } from "react";
import Select from 'react-select';
import IZone from "../../utils/types/zones";


type AutoCompleteComponentProps<IZone> = {
    options: IZone[];
};


const AutoCompleteComponent = ({
    options
}: AutoCompleteComponentProps<IZone>): React.ReactElement => {

    const [selectedValue, setValue] = useState();

    return (
        <Select
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    )
}

export default AutoCompleteComponent;

import React, { useState } from 'react'
import SimpleSlider from '../components/Slider'
import Thumb from '../components/Thumb'
import Describe from '../components/Describe';
import Info from '../components/Info';

export default function GrowColor() {
    const [filter, setFilter] = useState('Теплый')


    const onFilterChange = name => {
        setFilter(name);
    };

    return (
        <div className="grow-color">
            <div className="grow-color-block">
                <SimpleSlider filters={filter} />
            </div>
            <div className="grow-color-block grow-color-block--border">
                <Describe />
                <Info />
                <Thumb
                    onFilterChange={onFilterChange}
                    filter={filter}
                />
            </div>
        </div>
    )
}

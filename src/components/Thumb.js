import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import day from '../resources/img/day-thumb.jpg'
import cold from '../resources/img/cold-thumb.jpg'
import warm from '../resources/img/warm-thumb.jpg'

const data = [
    { id: 1, color: 'Теплый', image: warm },
    { id: 2, color: 'Дневной', image: day },
    { id: 3, color: 'Холодный', image: cold }
]

export default function Thumb({ onFilterChange, filter }) {


    return (
        <div className="thumbnail">
            {data.map(({ id, color, image }) => {
                const isActive = filter === color;
                const cls = isActive ? `active` : '';
                return (
                    <div
                        className={`thumbnail-item ${cls}`}
                        key={id}
                        style={{ background: `url(${image}) ` }}
                        onClick={() => onFilterChange(color)}
                    >
                        {isActive ? <CheckIcon className="check" /> : null}
                        <span className="thumbnail-item_color-text">{color}</span>
                    </div>
                )
            })}
        </div>
    )
}

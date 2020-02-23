import React from 'react'

export default function Describe() {
    return (
        <ul className="describe">
            <li className="describe-item">
                <span>Класс:</span>
                <span className="describe-item-btn">Standart</span>
            </li>
            <li className="describe-item">
                <span>Потребляемая мощность:</span>
                <span>59 Вт.</span>
            </li>
            <li className="describe-item">
                <span>Сила света:</span>
                <span>3459 люмен = 7.5 ламп накаливания по 40 Вт.</span>
            </li>
            <li className="describe-item">
                <span>Гарантия:</span>
                <span>3 года</span>
            </li>
            <li className="describe-item">
                <span>Монтаж:</span>
                <span>Да</span>
            </li>
            <li className="describe-item">
                <span>Итого сумма:</span>
                <span>2594 рублей</span>
            </li>
        </ul>
    )
}

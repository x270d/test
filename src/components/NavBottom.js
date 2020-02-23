import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBottom() {
    return (
        <nav>
            <ul className="nav">

                <li>
                    <NavLink className="nav-link " exact to="/kitchen_option" activeClassName='active'>
                        Вариант кухни
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link " exact to="/kitchen_size" activeClassName='active'>
                        Размеры
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link " exact to="/sensor" activeClassName='active'>
                        Сенсор
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link " exact to="/power_cable" activeClassName='active'>
                        Питающий кабель
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link " exact to="/power_supply" activeClassName='active'>
                        Блок питания
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link " exact to="/" activeClassName='active'>
                        Цвет свечения
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link nav-link--red" exact to="/mounting" activeClassName='active'>
                        Монтаж
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link nav-link--red" exact to="/basket" activeClassName='active'>
                        Корзина
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

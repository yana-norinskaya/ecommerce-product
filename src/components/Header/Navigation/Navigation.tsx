import { FC } from 'react';
import { NavLink } from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/collections">Collections</NavLink></li>
                <li><NavLink to="/men">Men</NavLink></li>
                <li><NavLink to="/women">Women</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}
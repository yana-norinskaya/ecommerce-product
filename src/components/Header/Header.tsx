import { FC } from "react";

import { Navigation, Cart, Avatar } from "../../components";

import "./styles.css";

import logo from "../../images/logo.svg";

export const Header: FC = () => {
    return (
        <header>
            <div className="flex w-[580px] justify-between">
                <img src={logo} alt="logo" className="logo" sizes="200" />
                <Navigation />
            </div>
            <div className="flex w-[100px] justify-between items-center">
                <Cart />
                <Avatar />
            </div>
        </header>
    )
}
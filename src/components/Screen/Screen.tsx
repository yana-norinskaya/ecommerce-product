import { FC } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const Screen: FC = () => {
    return (
        <div className="container">
            <Header />
            <Main />
        </div>
    )
}
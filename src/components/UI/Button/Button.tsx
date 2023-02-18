import { FC, ReactNode } from "react";
import "./style.css";


interface IButton {
    children: ReactNode,
    onClick?: () => void
}

export const Button: FC<IButton> = ({ children, onClick }) => {
    return (
        <div className="btn_add" onClick={onClick}>
            {children}
        </div>
    )
}
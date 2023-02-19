import { FC } from "react";

import { Header, Main } from "../../components";

export const Screen: FC = () => {
    return (
        <div className="container">
            <Header />
            <Main />
        </div>
    )
}
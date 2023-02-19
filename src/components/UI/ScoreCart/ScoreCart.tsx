import { FC } from "react";

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "../../../store";
import { decrement, increment } from "../../../store/productSlice";

import minus from "../../../images/icon-minus.svg";
import plus from "../../../images/icon-plus.svg";

export const ScoreCart: FC = () => {

    const { scoreCart } = useSelector((state: RootState) => state.products);

    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center bg-gray-100 w-1/2 p-3 rounded-xl mr-5">
            <img
                className="cursor-pointer"
                src={minus}
                alt="minus"
                onClick={() => dispatch(decrement())} />
            <span className="font-bold">{scoreCart}</span>
            <img
                className="cursor-pointer"
                src={plus}
                alt="plus"
                onClick={() => dispatch(increment())} />
        </div>
    )
}
import {FC, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import type { RootState } from "../../store";
import {toggleModal} from "../../store/productSlice";

import close from "../../images/icon-close.svg";
import "./style.css";

export const Modal: FC = () => {
    const { isModal } = useSelector((state: RootState) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        const time = setTimeout(() => {
            dispatch(toggleModal())
        }, 3000)
        return () => clearTimeout(time)
    }, [dispatch, isModal])

    return(
        <>
            {isModal &&
                <div className="modal">
                <div className="flex justify-between items-center">
                    <p className="font-bold">Done!</p>
                    <img
                        src={close}
                        alt="close"
                        className="cursor-pointer"
                        onClick={() => dispatch(toggleModal())}/>
                </div>
                <p className="pt-5 text-gray-400">Product added to cart!</p>
            </div>}
        </>

    )
}
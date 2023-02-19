import { FC } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "../../../store";
import { deleteSavedScoreCart, toggleModalCart } from '../../../store/productSlice';

import { Button } from '../../../components';

import "./style.css";

import deleteIcon from "../../../images/icon-delete.svg";
import close from "../../../images/icon-close.svg";

export const CartInside: FC = () => {

    const { data, savedScoreCart, isModalCart } = useSelector((state: RootState) => state.products);

    const renderAllSum = data[0].currentPrice * savedScoreCart;

    const { src, name, currentPrice } = data[0];

    const dispatch = useDispatch();

    return (
        <>
            {isModalCart
                && <div className='cart_wrap'>
                    <p className='title'>
                        <span>Cart</span>
                        <img
                            className='close'
                            src={close}
                            alt="close"
                            onClick={() => dispatch(toggleModalCart())} />
                    </p>

                    {!savedScoreCart
                        ? <p className='description'>You cart empty</p>
                        : <>
                            <div className='py-3 flex justify-between items-center'>
                                <img
                                    src={src[0]}
                                    alt="product"
                                    className="product_img" />
                                <div>
                                    <p>{name}</p>
                                    <span>${currentPrice}.00 x {savedScoreCart}</span><span className='font-bold pl-1'>${renderAllSum}.00</span>
                                </div>
                                <img
                                    src={deleteIcon}
                                    alt="deleteIcon"
                                    className='cart_delete'
                                    onClick={() => dispatch(deleteSavedScoreCart())} />
                            </div>
                            <Button>
                                Checkout
                            </Button>
                        </>
                    }
                </div>
            }
        </>

    )
}
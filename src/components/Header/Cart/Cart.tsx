import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleModalCart } from '../../../store/productSlice';

import { CartInside } from './CartInside';

import cart from "../../../images/icon-cart.svg";
import { RootState } from '../../../store';

export const Cart: FC = () => {
    const { savedScoreCart } = useSelector((state: RootState) => state.products)
    const dispatch = useDispatch();
    return (
        <>
            <div className='cart_image' onClick={() => dispatch(toggleModalCart())}>
                <img src={cart} alt="cart" />
                {savedScoreCart > 0 &&
                    <div className='cart_score'>
                        {savedScoreCart}
                    </div>
                }
            </div>


            <CartInside />
        </>
    )
}
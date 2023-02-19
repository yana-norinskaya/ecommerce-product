import { FC } from 'react';

import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { savedScoreCart } from '../../store/productSlice';

import { Carousel, InfoProduct, ScoreCart, Button, Modal } from '../../components';

import cart from "../../images/white-cart.svg";

export const Main: FC = () => {
    const { scoreCart } = useSelector((state: RootState) => state.products);

    const dispatch = useDispatch();

    return (
        <div className='w-[1000px] m-auto flex justify-between items-center mt-10'>
            <Carousel />
            <div className='w-[500px]'>
                <InfoProduct />
                <div className='flex mt-8'>
                    <ScoreCart />
                    <Button onClick={() => dispatch(savedScoreCart(scoreCart))}>
                        <img src={cart} alt="cart" width={20} height={20} />
                        <p className="pl-1">Add to cart</p>
                    </Button>
                </div>
            </div>
            <Modal/>
        </div>
    )
}
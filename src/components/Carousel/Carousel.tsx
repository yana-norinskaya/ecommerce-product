import { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import type { RootState } from "../../store";

import "./styles.css";

export const Carousel: FC = () => {
    const { data } = useSelector((state: RootState) => state.products);
    const [active, setActive] = useState(0);

    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        setAnimation(true);
    }, [active])

    const handleClick = (i: number) => {
        setActive(i);
        setAnimation(false);
    }

    return (
        <div>
            <img src={data[0].src[active]} alt="product" className={animation ? "selected_img animate-fade" : "selected_img"} />
            <div className='flex justify-between mt-9'>
                {data[0].src.map((item, i) =>
                    <>
                        <img
                            key={Math.random()}
                            className={active === i ? 'img_small focus' : 'img_small'}
                            src={item}
                            alt="product"
                            onClick={() => handleClick(i)} />
                    </>
                )}
            </div>

        </div>
    )
}
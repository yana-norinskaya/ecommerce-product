import { FC } from 'react';
import avatar from "../../../images/image-avatar.png";

export const Avatar: FC = () => (

    <div className='wrap_avatar'>
        <img src={avatar} alt="cart" className='avatar' />
    </div>
)

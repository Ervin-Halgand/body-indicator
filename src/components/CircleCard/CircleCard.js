import { forwardRef } from 'react';

import './style.css'

const CircleCard = forwardRef(({ text, title }, ref) => {

    return (
        <div className="metabolisme__result__circle__container">
            <div className="metabolisme__result__circle__container__coloration translate0"></div>
            <div className="metabolisme__result__circle">
                <div ref={ref}>{text}</div>
                <div className="metabolisme__result__card__title">
                    {title}
                </div>
            </div>
        </div>
    )
});

export default CircleCard;
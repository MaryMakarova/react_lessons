import React from 'react';
import delivery from '../assets/img/advantages/delivery.svg';
import sales from '../assets/img/advantages/sales.svg';
import qa from '../assets/img/advantages/qa.svg';

export default function Advantages() {
    return (
        <div className="advantages center">
            <div className="advantage">
                <img src={delivery} alt="delivery" />
                <h1>Free delivery</h1>
                <p>
                    Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.
                </p>
            </div>
            <div className="advantage">
                <img src={sales} alt="sales" />
                <h1>Sales & discounts</h1>
                <p>
                    Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.
                </p>
            </div>
            <div className="advantage">
                <img src={qa} alt="quality" />
                <h1>Quality assurance</h1>
                <p>
                    Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.
                </p>
            </div>
        </div>
    );
}

import React from 'react';
import person from '../assets/img/subscribe/Intersect.png';

export default function Subscribe() {
    return (
        <div className="subscribe center">
            <div className="subscribe_content">
                <div className="citation">
                    <img src={person} alt="Citation person" />
                    <p>
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <i>a pulvinar purus condimentum</i>“
                    </p>
                </div>
                <div className="subscribe__newsletters">
                    <p className="subscribe__newsletters_title">SUBSCRIBE</p>
                    <p className="subscribe__newsletters_subtitle">FOR OUR NEWSLETTER AND PROMOTION</p>
                    <div className="subscribe-container">
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

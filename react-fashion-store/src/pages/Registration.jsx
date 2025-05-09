import React from 'react';

export default function Registration() {
    return (
        <div className="registration-page">
            <header className="section_header center">
                <h1 className="section_header_title">Registration</h1>
            </header>

            <section className="registration center">
                <form className="registration__form" onSubmit={(e) => e.preventDefault()}>
                    <div className="registration__personal-info">
                        <h1 className="registration__input-label">Your Name</h1>
                        <input className="registration__input-field input-field" type="text" placeholder="First Name" required />
                        <input className="registration__input-field input-field" type="text" placeholder="Last Name" required />

                        <div className="gender">
                            <input type="radio" id="male" name="gender" />
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" />
                            <label htmlFor="female">Female</label>
                            <input type="radio" id="other" name="gender" />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>

                    <div className="registration__credentials">
                        <h1 className="registration__input-label">Login details</h1>
                        <input className="registration__input-field input-field" type="email" placeholder="Email" required />
                        <input className="registration__input-field input-field" type="password" placeholder="Password" required />

                        <p className="password-info">
                            Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
                        </p>
                    </div>

                    <button className="primaty-button" type="submit">
                        <span>JOIN NOW</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.5401 0.208095C11.6059 0.142131 11.6841 0.0897967 11.7701 0.0540883C11.8562 0.01838 11.9484 0 12.0416 0C12.1348 0 12.227 0.01838 12.3131 0.0540883C12.3991 0.0897967 12.4773 0.142131 12.5431 0.208095L16.793 4.458C16.859 4.5238 16.9113 4.60196 16.947 4.68802C16.9827 4.77407 17.0011 4.86632 17.0011 4.95949C17.0011 5.05266 16.9827 5.14491 16.947 5.23097C16.9113 5.31702 16.859 5.39518 16.793 5.46098L12.5431 9.71089C12.4101 9.84389 12.2297 9.91861 12.0416 9.91861C11.8535 9.91861 11.6731 9.84389 11.5401 9.71089C11.4071 9.57788 11.3324 9.39749 11.3324 9.2094C11.3324 9.0213 11.4071 8.84091 11.5401 8.70791L15.29 4.95949L11.5401 1.21107Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 4.95929C0 4.77144 0.0746 4.59127 0.2074 4.45844C0.3403 4.3256 0.5205 4.25098 0.7083 4.25098H15.583C15.7708 4.25098 15.951 4.3256 16.0838 4.45844C16.2167 4.59127 16.2913 4.77144 16.2913 4.95929C16.2913 5.14715 16.2167 5.32732 16.0838 5.46015C15.951 5.59299 15.7708 5.66761 15.583 5.66761H0.7083C0.5205 5.66761 0.3403 5.59299 0.2074 5.46015C0.0746 5.32732 0 5.14715 0 4.95929Z"
                            />
                        </svg>
                    </button>
                </form>

                <div className="registration__info">
                    <h1>LOYALTY HAS ITS PERKS</h1>
                    <p>
                        Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:
                    </p>
                    <ul className="custom-list">
                        <li>15% off welcome offer</li>
                        <li>Free shipping, returns and exchanges on all orders</li>
                        <li>$10 off a purchase on your birthday</li>
                        <li>Early access to products</li>
                        <li>Exclusive offers & rewards</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

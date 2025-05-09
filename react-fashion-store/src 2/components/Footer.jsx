import React from 'react';

export default function Footer() {
    return (
        <footer className="center">
            <p className="copyright">© 2022 Brand All Rights Reserved.</p>
            <div className="social_buttons">
                <a href="#" className="social_btn">
                    {/* Facebook */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
                        <path d="M9.08836 8.28L9.50686 5.61602H6.89022V3.88729..." />
                    </svg>
                </a>
                <a href="#" className="social_btn">
                    {/* Instagram */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M7.66764 4.68159C5.51555 4.68159..." />
                    </svg>
                </a>
                <a href="#" className="social_btn">
                    {/* Twitter */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M14.5928 4.741C14.6031 4.88313..." />
                    </svg>
                </a>
            </div>
        </footer>
    );
}

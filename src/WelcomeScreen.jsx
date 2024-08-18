import React from 'react';
import './WelcomeScreen.css';
import logo from './img/logo.png';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ? (
        <div className='WelcomeScreen'>
            <div className='welcome-container'>
                <div className='logo-header-container'>
                    <img src={logo} alt='Logo of meet app' className='logo' />
                    <h1>Welcome to the Meet App!</h1>
                </div>
                <h4>Log in to see upcoming events around the world for full-stack developers.</h4>
                <div className='button_cont' align='center'>
                    <div class='google-btn'>
                        <div class='google-icon-wrapper'>
                            <img class='google-icon' src='https://images.app.goo.gl/aWKMYmHA8WZGVzCh8' alt='Google sign-in' />
                        </div>
                        <button
                            onClick={() => {
                                props.getAccessToken();
                            }}
                            rel='nofollow noopener'
                            class='btn-text'
                        >
                            <b>Sign in with Google</b>
                        </button>
                    </div>
                </div>
                <div className='privacy'>
                    <a href='https://faratim.github.io/meet/privacy.html' rel='nofollow noopener'>
                        Privacy policy
                    </a>
                </div>
            </div>
        </div>
    ) : null;
}

export default WelcomeScreen;

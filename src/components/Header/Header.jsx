// import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Header.scss';


const Header = ({ children }) => {


    return (
        <header>
            <nav className='Nav'>

                <Link to="/create" className='Nav__btn' style={{}}>
                    <span className='Nav__btn__item'></span>
                    <span className='Nav__btn__item'>Create</span>
                </Link>

                <ul className='Nav__list'>
                    <li className='Nav__list__item'>
                        <Link to="/alltodo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#242424" />
                            </svg>
                            <span>All</span>
                        </Link>
                    </li>
                    <li className='Nav__list__item'>
                        <Link to="/ondate">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#3BA65F" />
                            </svg>
                            <span>On date</span>
                        </Link>
                    </li>
                    <li className='Nav__list__item'>
                        <Link to='/nolimit'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#FFB82F" />
                            </svg>
                            <span>No limit</span>
                        </Link>
                    </li>
                </ul>

            </nav>

            {children}
        </header>
    );
};

export default Header;
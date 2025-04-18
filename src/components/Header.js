import React from 'react';
import './styles/Header.css';
import { Close, MenuBookOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = ( ) => {

    return (
        <div className = 'header'>
            <div className = 'header_logo'>
                <h1>My Portfolio</h1>
            </div>

            <nav>
                <ul>
                    <div className = 'closed'>
                         <Close className = 'close'/>
                    </div>

                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/'>About</Link>
                    </li>
                    <li>
                        <Link to = '/'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to = '/'>Blogs</Link>
                    </li>
                    <li>
                        <Link to = '/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className = 'changer'>
                <MenuBookOutlined className = 'menu'/>
            </div>
        </div>
    )
}

export default Header;
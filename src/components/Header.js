import React from 'react';
import Styles from './Header.module.css';

function Header({ changeFocus }) {
    return(
        <header>
            <nav>
                {<ul>
                    <li><a onClick={changeFocus} href="#">World</a></li>
                    <li><a onClick={changeFocus} href="#">National</a></li>
                    <li><a onClick={changeFocus} href="#">Politics</a></li>
                    <li><a onClick={changeFocus} href="#">Science</a></li>
                    <li><a onClick={changeFocus} href="#">Sports</a></li>
                </ul>}
            </nav>
        </header>
    );
}

export default Header;
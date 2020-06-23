import React from 'react';
import Styles from './Header.module.css';

function Header({ focus, changeFocus }) {
  return (
    <header>
      <nav>
        {
          <ul>
            <li>
              <a
                className={focus === 'world' ? Styles.focus : null}
                onClick={changeFocus}
                href='#0'
              >
                World
              </a>
            </li>
            <li>
              <a
                className={focus === 'national' ? Styles.focus : null}
                onClick={changeFocus}
                href='#0'
              >
                National
              </a>
            </li>
            <li>
              <a
                className={focus === 'politics' ? Styles.focus : null}
                onClick={changeFocus}
                href='#0'
              >
                Politics
              </a>
            </li>
            <li>
              <a
                className={focus === 'science' ? Styles.focus : null}
                onClick={changeFocus}
                href='#0'
              >
                Science
              </a>
            </li>
            <li>
              <a
                className={focus === 'sports' ? Styles.focus : null}
                onClick={changeFocus}
                href='#0'
              >
                Sports
              </a>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
}

export default Header;

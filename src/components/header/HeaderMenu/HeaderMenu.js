import React from 'react';
import Link from 'next/link';
import styles from "./HeaderMenu.module.scss";

const Headermenu = () => {
    return (
        <div className={styles.header__menu}>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                            Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>
                            About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                            Shop
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Headermenu;

import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css'

const AboutPage = () => {
    return (
        <div>
            <h3 className={styles.text_large}>This is about page</h3>
            <Link href={"/about/history"}>History</Link>
            <Link href={"/about/mission"}>Mission</Link>
        </div>
    );
};

export default AboutPage;
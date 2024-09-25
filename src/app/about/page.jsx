import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    console.log(name)
    return (
        <div>
            This is about page
            <Link href={"/about/history"}>History</Link>
            <Link href={"/about/mission"}>Mission</Link>
        </div>
    );
};

export default AboutPage;
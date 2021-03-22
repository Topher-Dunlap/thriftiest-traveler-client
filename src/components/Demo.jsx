import React from 'react';
import '../css/demo.css';

export default function Demo() {

    return (
        <section className='demoMargin'>
            <header>
                <h2 className='headerTheme'>How to Demo</h2>
            </header>
            <p className='paraMargin'>If you would like to demo this app without registration please enter the following
                credentials:</p>
            <ul className='demoListStyle'>
                <li>
                    Email:<span className='demoColor'> test@gmail.com</span>
                </li>
                <li>
                    Password:<span className='demoColor'> P@sswordsAreCool1!</span>
                </li>
            </ul>
        </section>
    );
}


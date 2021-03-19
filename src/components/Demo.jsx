import React from 'react';
import '../css/demo.css';

export default function Demo() {

	return (
		<section className='demoMargin'>
			<header>
				<h2 className='headerTheme'>How to Demo</h2>
			</header>
			<p className='paraMargin'>If you would like to demo this app without registration please enter the following credentials:</p>
			<ul className='demoListStyle'>
				<li>
                    Email: test@gmail.com
				</li>
				<li>
                    Password: P@sswordsAreCool1!
				</li>
			</ul>
		</section>
	);
}


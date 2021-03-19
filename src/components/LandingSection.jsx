import React from 'react';
import '../css/landingSection.css';

export default function LandingSection(props) {

    const pContent = props.pContent;
    const sectionImage = props.sectionImage;
    const altText = props.altText;

    return (
        <section className='sectionPara'>
            <img className='imgStyle' alt={altText} src={sectionImage}/>
            <p>{pContent}</p>
        </section>
    );
}
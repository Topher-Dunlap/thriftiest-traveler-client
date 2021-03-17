import React from 'react';

export default function LandingSection(props) {

    ///props
    const pContent = props.pContent;
    const sectionImage = props.sectionImage;

    return (
        <section style={sectionPara}>
            <img style={imgStyle} alt={"travel"} src={sectionImage}/>
            <p>{pContent}</p>
        </section>
    )
}

const imgStyle = {
    height: "100%",
    width: "100%",
    margin: "0",
}

const sectionPara = {
    margin: "4rem 2rem",
    textAlign: "center",
}
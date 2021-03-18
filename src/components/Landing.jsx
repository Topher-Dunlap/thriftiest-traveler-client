import React from 'react';
import mainPhoto from '../img/traveler_main.png';
import mainPhoto2 from '../img/traveler_main_2.png';
import Register from './Register';
import Demo from './Demo';
import LandingSection from './LandingSection';

export default function Landing() {

    const sectionMap = sectionData.map((section, idx) =>
        <LandingSection
            key={idx}
            pContent={section.pContent}
            sectionImage={section.sectionImage}
            altText={section.altText}
        />
    )

    return (
        <section>
            <div>
                {sectionMap}
                <Demo/>
                <Register/>
            </div>
        </section>
    )

}

const sectionData = [
    {
        pContent: `Thriftiest Traveler shows you the best deals on travel in areas that have recently experienced a 
        disaster or terrorist related event. While other tourists may be dissuade from visiting such an area it happens 
        to be the best time to take advantage of touring a highly secured area for bottom of the barrel pricing! Login, scroll through 
        flight deals, save your favorite flights or navigate to Orbitz.com to book using accessible buttons on each deal.`,
        sectionImage: mainPhoto,
        altText: "backpacking",
    },
    {
        pContent: `Have your ever struggled to come up with interesting conversation with strangers and acquaintances
        you meet? How about something to talk about with your co-workers on monday? Thriftiest Traveler is here to
        provide you with an unforgettable experience you'll love telling everyone about.`,
        sectionImage: mainPhoto2,
        altText: "tropical mountains",
    },
]

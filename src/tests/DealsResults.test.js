import React from 'react';
import ReactDOM from 'react-dom';
import DealsResults from '../components/DealsResults';

const event = {
    title: "testflight",
    country_name: "countryName",
    description: "description",
    place_name: "placeName",
    price: "price",
    carrier: "carrier",
    departure: "departure",
    traveler_user: "user_id"
}

describe(`DealsResults component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <DealsResults
                countryName={event.countryName}
                placeName={event.placeName}
                title={event.title}
                category={event.category}
                description={event.description}
                price={event.price}
                carrier={event.carriersName}
                departure={event.departure}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})
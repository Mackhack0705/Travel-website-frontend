import React from 'react'
import Feature from '../components/Feature'
import '../pages-style/featuresearch.css'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


const FeatureSearch = () => {
    const isFlightSelected = useSelector(state => state.flight.flightSelect)
    console.log(isFlightSelected);

    const isHotelSelected = useSelector(state => state.hotel.hotelSelect)
    console.log(isHotelSelected);

    const searchData = useSelector(state => state.search.searchData)
    console.log(searchData);

    const renderFlightResults = () => {
        if (searchData && searchData.length > 0) {
            return searchData.map((element) => (
                // Your flight mapping logic
                <Card key={element.id} className='table-row' style={{ width: '65rem', height: '8rem' }}>
                    <Row noGutters>
                        <Col>
                            <Card.Body>{element.airlineName}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>{element.destination}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>{element.departureDate}</Card.Body>
                        </Col>

                        <Col>
                            <Card.Body>{element.returnDate}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>$ {element.ticketPrice}</Card.Body>
                        </Col>
                        <Col>
                            <Button variant="warning" style={{ color: "#ffff", position: "relative", top: "10px", borderRadius: "50px" }}>Book now</Button>
                        </Col>
                    </Row>
                </Card>
            ));
        } else {
            return <div style={{ textAlign: 'center', fontSize: '5rem' }}>No Results Found</div>;
        }

    };


    const renderHotelResults = () => {
        if (searchData && searchData.length > 0) {
            return searchData.map((item) => (
                // Your hotel mapping logic
                <Card key={item.id} className='table-row' style={{ width: '65rem', height: '10rem' }}>
                    <Row noGutters>
                        <Col>
                            <Card.Body>{item.hotelName}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>{item.hotelDestination}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>{item.CheckInDate}</Card.Body>
                        </Col>

                        <Col>
                            <Card.Body>{item.CheckOutDate}</Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>$ {item.roomPrice}</Card.Body>
                        </Col>
                        <Col>
                            <Button variant="warning" style={{ color: "#ffff", position: "relative", top: "10px", borderRadius: "50px" }}>Book now</Button>
                        </Col>
                    </Row>
                </Card>
            ));
        } else {
            return <div style={{ textAlign: 'center', fontSize: '5rem' }}>No Results Found</div>;
        }

    };


    // const renderNoResultsFound = () => (
    //     <div style={{ textAlign: 'center', fontSize: '5rem' }}>No results Found</div>
    // );
    return (
        <div className='flight-Search'>
            <Feature />
            <ul className='list-rows'>
                {isFlightSelected && !isHotelSelected && searchData && renderFlightResults()}
                {!isFlightSelected && isHotelSelected && searchData && renderHotelResults()}
                {/* {!isFlightSelected && isHotelSelected && searchData && renderNoResultsFound()} */}

            </ul>
        </div>
    )
}

export default FeatureSearch







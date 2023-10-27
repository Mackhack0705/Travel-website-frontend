import React, { useState } from "react";
import "../style/feature.css";
import { useDispatch, useSelector } from 'react-redux'
import { flightSearch, hotelSearch, resetSearch } from "../feature/searchSlice";
import { setFlight } from "../feature/flightSlice";
import { setHotel } from "../feature/hotelSlice";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from "../services/helper";

const Feature = () => {
  const [input, setInput] = useState('');
  // const [activeSection, setActiveSection] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFlightSelected = useSelector(state => state.flight.flightSelect)
  console.log(isFlightSelected);

  const isHotelSelected = useSelector(state => state.hotel.hotelSelect)
  console.log(isHotelSelected);

  // Function to fetch flightData from api
  const fetchflightdata = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/items/flight/search?destination=${input}`);
      if (response.data) {
        const FlightData = await response.data;
        // Dispatch the flightSearch action with the fetched data
        dispatch(flightSearch(FlightData));
      } else {
        // Handle the API request error
        dispatch(flightSearch([]));
        console.error('Failed to fetch flight data.');
      }
    } catch (error) {

      console.error('An error occurred while fetching flight data:', error);
    }
  }
  // Function to fetch flightData from api
  const fetchhoteldata = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/items/hotel/search?destination=${input}`);
      console.log(response);
      if (response.data) {
        const HotelData = await response.data;
        // Dispatch the flightSearch action with the fetched data
        dispatch(hotelSearch(HotelData));
      } else {
        // Handle the API request error
        dispatch(hotelSearch([]));
        console.error('Failed to fetch flight data.');
      }
    } catch (error) {
      console.error('An error occurred while fetching flight data:', error);
    }
  }

  const HandleClick = (e) => {
    e.preventDefault();
    // setActiveSection(section);
    if(isHotelSelected === true) {
      fetchhoteldata();
    } else {
      fetchflightdata();
    }
    setInput('');
    navigate('/flight-Search');
  }
  
  const HandleHotels = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/items/hotel/allitems`);
      console.log(res.data);
      const HotelData = await res.data;
      // setActiveSection(false);
      dispatch(setHotel(true))
      dispatch(setFlight(false))
      dispatch(resetSearch(HotelData))
    } catch (error) {
      console.error('An error occurred while fetching hotel data:', error);
    }
  }

  const HandleFlights = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/items/flight/allitems`);
      console.log(res.data);
      const FlightData = await res.data;
      // setActiveSection(false);
      dispatch(setFlight(true))
      dispatch(setHotel(false))
      dispatch(resetSearch(FlightData))
    } catch (error) {
      console.error('An error occurred while fetching flight data:', error);
    }
  }

  return (
    <form onSubmit={HandleClick}>
      <div className="feature-section">
        <div className={`hotel-section ${isHotelSelected === true ? "active" : "inactive"}`} 
          onClick={HandleHotels}>
          <p>Hotels</p>
        </div>
        <div className={`flight-section ${isFlightSelected === true ? "active" : "inactive"}`} 
        onClick={HandleFlights}>
          <p>Flights</p>
        </div>

        <div className="search-section fl">
          <table>
            <thead>
              <tr>
                <th>DESTINATION</th>
                <th>CHECK IN</th>
                <th>CHECK OUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input
                  type="text"
                  className="destination"
                  placeholder="Destination"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                /></td>
                <td><input type="date" name="" className="check" /></td>
                <td><input type="date" name="" className="check" /></td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="primary-button search" >Search</button>
        </div>
      </div>
    </form>
  );
};

export default Feature;

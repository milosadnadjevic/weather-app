import axios from "axios";
import { useState } from "react";


function App() {

  // const url = 'http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=7115ae54e4f9a63824df960607bdcf02'
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
            <div className="temp">
              <h1>60F</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

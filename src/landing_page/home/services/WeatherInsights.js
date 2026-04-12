import React from 'react';
import "./weather.css"

 function WeatherInsights() {
    return(
        <div className='weather-insight' style={{alignItems: 'center', height: '60vh' }}>
            <h3>Weather Insights</h3>
            <img src="/media/images/weatherInsight-Image.jpg" alt="Weather Insights" 
                 style={{ width: '300px', borderRadius: '10px' }}
            />
        </div>
    )
 }

 export default WeatherInsights;
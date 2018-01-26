# React Weather App

### Overview

A simple search app to view five day forecasts by city, integrating API weather data and Google Maps with React and Redux.

- The app takes data from the [Open Weather Map API](https://openweathermap.org/) using a Redux action creator which making an axios request.
- Redux-Promise middleware then ensures the data from the request is returned successfully before setting the payload.
- The payload to the reducer which sets the Redux state, specifically by creating a new array containing all weather data rather than mutating the existing array.
- The state (containing the weather data) is then made available in the 'weather_list' container using Redux's 'mapStateToProps' function.
- The data arrays were graphically displayed using Sparklines.
- Maps were added using React-Google-Maps

![App](/images/1.png)

Part 3 of Stephen Grider's ['Modern React with Redux'](https://www.udemy.com/react-redux/) Udemy series.

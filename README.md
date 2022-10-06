## Technologies Used

- [React](https://reactjs.org/)
- [React-Leaflet](https://react-leaflet.js.org/)

## Description

Map app

## Getting Started

---

## Note
kindly note that you need node installed to be able run this app
- [Node](https://nodejs.org/en/)
 
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start

you should be able to access the app by visiting `http://localhost:3000`

```

## Testing
```bash
To manually test the app visit `http://localhost:3000` and input bbox of a location 
into the input fields.

# for example
Min Longitude: -4.24447
Min Latitude: 55.85882
Max Longitude: -4.24377
Max Latitude: 55.85902
```
kindly note that an error is displayed: 
- if the area selected is too small or does not return any geoJSON features
- if the area selected is too large
- if an invalid bbox is supplied

```bash
# To run unit test
$ npm run test
```

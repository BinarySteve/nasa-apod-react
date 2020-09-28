import React, { useEffect, useState } from "react";
import "./App.css";
import NasaDate from "./components/NasaDate";
import Nasaphoto from "./components/Nasaphoto";


function App() {
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");
  const today = new Date();
  today.setDate(today.getDate() - 1);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=F4ziqaZddjT1dqbitcXz5IqWhy8ymecPspZb5icN&date=${
        date === "" ? today.toISOString().substr(0, 10) : date
      }`
    )
      .then((res) => res.json())
      .then((json) => setPhoto(json));
  }, [date]);

  const changeDate = (e) => {
    e.preventDefault();
    let dateInput = e.target[0].value;
    setDate(dateInput);
  };

  return (
    <div className="container text-center m-100">
      <h1>NASA's Astronomy Pic of the Day</h1>
      <NasaDate changeDate={changeDate} />
      <Nasaphoto photo={photo} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import NasaDate from "./components/NasaDate";
import Nasaphoto from "./components/Nasaphoto";
import Space from "./images/space.jpg";

function App() {
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const url = `https://api.nasa.gov/planetary/apod?api_key=F4ziqaZddjT1dqbitcXz5IqWhy8ymecPspZb5icN&date=${
    date === "" ? today.toISOString().substr(0, 10) : date
  }`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setPhoto(json));
  }, [date]);

  const changeDate = (value) => {
    console.log(value);
    setDate(value.toISOString().substr(0, 10));
  };

  return (
    <div>
      <h1 className="text-center text-white mt-3">
        NASA's Astronomy Pic of the Day
      </h1>
      <div className="container app__container">
        <NasaDate changeDate={changeDate} />
        <Nasaphoto photo={photo} />
      </div>
    </div>
  );
}

export default App;

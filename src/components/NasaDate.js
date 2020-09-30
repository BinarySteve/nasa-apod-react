import React, { memo, useState } from "react";
import Calendar from "react-calendar";
import "../Date.css";
import "react-calendar/dist/Calendar.css";
import { Button } from "reactstrap";

function NasaDate({ changeDate }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (e) => {
    setVisible(!visible);
  };
  return (
    <form className="text-center ">
      <Button className="btn btn-light text-black shadow-xl mb-3 mt-3" onClick={toggleVisibility}>
        Select Date
      </Button>
      <Calendar
        className={` mx-auto position-absolute z__index ${
          visible ? "" : "d-none"
        }`}
        onChange={changeDate}
        onClickDay={toggleVisibility}
      />
    </form>
  );
}

export default memo(NasaDate);

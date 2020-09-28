import React, { memo } from "react";

function NasaDate({ changeDate }) {
  

  return (
    <form
      onSubmit={changeDate}
    >
      Enter a date
      <input/>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default memo(NasaDate);

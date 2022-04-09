import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <div>
      <h5>Aunty</h5>
      <p>
        <small>House: {house}</small>
      </p>
      <button onClick={handleHouseIncrease}>Add house</button>
    </div>
  );
};

export default Aunty;

import React, { useState } from 'react';

const FilterButtons = () => {

 const [isActive, setActive] = useState();

  return (
    <div className="filterButtons_container">
      <div className={isActive ==="filterButtons_grid"} id={1} onClick={(e) => {setActive(e.target.id); console.log("this is id", e.target.id)}}>
        alsdfkjasl;dkfj
        <div /> {/* 2 by 2 */}
        <div /> {/* 2 by 2 */}
        <div /> {/* 2 by 2 */}
        <div /> {/* 2 by 2 */}
      </div>
    </div>
  );
};

export default FilterButtons;
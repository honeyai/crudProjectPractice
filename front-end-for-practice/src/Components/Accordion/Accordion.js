import { Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";

const Accordion = ({ title, content, icon }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="accordion_Container" onClick={() => setActive(!isActive)}>
      <div className={title === "My Account" && isActive ? "accordion_Label account" : title === "Books" && isActive ? "accordion_Label books" : "accordion_Label"}>
        <div className="accordion_IconAndLabel">
          {icon && <div className="accordion_Icon">
            {icon}
          </div>}
          <div className="accordion_Title">
            <Typography>{title}</Typography>
          </div>
        </div>
        <div className="accordion_Chevron">
          {
            isActive ?
              <FontAwesomeIcon icon={faChevronDown} size="lg"/> :
              <ArrowForwardIosIcon />
          }
        </div>
      </div>
      {isActive && <div className="accordion_Content">{content}</div>}
    </div>
  );
};

export default Accordion;
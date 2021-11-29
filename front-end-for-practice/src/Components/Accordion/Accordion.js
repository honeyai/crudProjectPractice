import { Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

const Accordion = ({title, content, icon}) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="accordion_Container"  onClick={() => setActive(!isActive)}>
      {icon && <div className="accordion_Icon">
        {icon}
      </div>}
      <div className="accordion_Title">
        <Typography>{title}</Typography>
        {
          isActive ? 
          <FontAwesomeIcon icon={faChevronDown} /> :
          <ArrowForwardIosIcon /> 
        }
      </div>
      {isActive && <div className="accordion_Content">{content}</div>}
    </div>
  );
};

export default Accordion;
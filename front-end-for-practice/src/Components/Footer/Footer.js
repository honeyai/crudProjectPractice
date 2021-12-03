import { Typography } from '@mui/material';
import React from 'react';
import LocationCard from '../LocationCard/LocationCard';
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  // faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const locations = [
    {
      location: "Brookyln, NY",
      address: "1234 Book ave",
      zip: "21324",
      hours: "M-F 10am - 3pm"
    },
    {
      location: "Queens, NY",
      address: "5678 Fiction St",
      zip: "79876",
      hours: "M-F 10am - 3pm"
    },
    {
      location: "Bronx, NY",
      address: "9086 Write Road",
      zip: "11234",
      hours: "M-F 10am - 3pm"
    },
    {
      location: "Manhattan, NY",
      address: "2348 Genre Rd",
      zip: "68768",
      hours: "M-F 10am - 3pm"
    }
  ]

  const siteDirectory = [
    {
      label: "Find a Store",
      href: "#"
    },
    {
      label: "Sign up/Sign In",
      href: "#"
    },
    {
      label: "About Us",
      href: "#"
    },
  ]

  return (
    <div className="footer_Container">
      <div className="footer_hoursLocations">
         Store Hours and Locations 
      </div>
      <span className="footer_divider"/>
      <div className="footer_Locations">
        {
          locations.map((l, key) =>
            <LocationCard location={l.location} address={l.address} zip={l.zip} hours={l.hours} key={key} />
          )
        }
      </div>
      <div className="footer_directoryAndSocials">
      <div className="footer_SiteDirectory">
        {
          siteDirectory.map((s, key) => <Typography style={{"padding": "2rem", }} key={key}>{s.label}</Typography>)
        }
      </div>
      <div className="footer_Socials">
        <a
          // href={footerInfo.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="twitter social-bg">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
        </a>
        <a
          // href={footerInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkedin social-bg">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </div>
        </a>
        <a
          // href={footerInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="facebook social-bg">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </div>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
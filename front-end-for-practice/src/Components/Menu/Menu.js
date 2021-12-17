import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./menu.css";
import { Typography } from '@mui/material';
import Accordion from '../Accordion/Accordion';
import { Link } from 'react-router-dom';
import StarsIcon from '@mui/icons-material/Stars';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Menu = ({ isOpen }) => {

  const list = [
    {
      href: "",
      label: "My Account",
      icon: <AccountCircleIcon />,
      subMenu: [
        {
          href: "",
          label: "Sign in / Create Account",
        },
        {
          href: "",
          label: "Order Status",
        },
        {
          href: "",
          label: "Payments"
        }
      ]
    },
    {
      href: "",
      label: "Books",
      subMenu: [
        {
          href: "",
          label: "See all books",
        },
        {
          href: "/b/bestsellers",
          label: "Bestsellers",
          icon: "",
        },
        {
          href: "",
          label: "Browse",
        }
      ]
    },
    {
      href: "/b/fiction",
      label: "Fiction",
    },
    {
      href: "/b/nonfiction",
      label: "Nonfiction"
    }
  ];

  const quickList = [
    {
      href: "",
      label: "Stores & Events",
      icon: <LocationOnIcon />,
    },
    {
      href: "/b/bestsellers",
      label: "Bestsellers",
      icon: <StarsIcon />,
    },
    {
      href: "",
      label: "Wishlist",
      icon: <BookmarkIcon />,
    },
  ]

  return (
    <div className={isOpen ? "menu_Container open" : "menu_Container"}>
      <div className="menu_List">
        {
          list.map((l, key) => {
            if (l.subMenu && l.icon) {
              return (
                <Accordion href={l.href} key={key} icon={l.icon} title={l.label} content={
                  l.subMenu.map((sl, key) =>
                    <div className="menu_SubListItem" key={key}>
                      <Link to={sl.href}><Typography key={key}>{sl.label}</Typography></Link>
                    </div>
                  )} />
              )
            } else if (l.subMenu && !l.icon) {
              return (
                <Accordion href={l.href} key={key} className="menu_ListItem" title={l.label} content={
                  l.subMenu.map((sl, key) =>
                    <div className="menu_SubListItem" key={key}>
                      <Link to={sl.href}><Typography key={key}>{sl.label}</Typography></Link>
                    </div>
                  )} />
              )
            } else {
              return (
                <div key={key}>
                  <Link to={l.href}><Typography key={key} className="menu_ListItem">{l.label}</Typography></Link>
                </div>
              )
            }
          })
        }
      </div>
      <div className="menu_quickLinks">
        {
          quickList.map((ql, key) => <Link to={ql.href} className="menu_QuickListItem" key={key}><div className="menu_IconAndLabel">
            <div className="menu_Icon">
              {ql.icon}
            </div>
            <div className="menu_Title">
              <Typography>{ql.label}</Typography>
            </div>
          </div></Link>)
        }
      </div>
    </div>
  );
};

export default Menu;
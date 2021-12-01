import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./menu.css";
import { Typography } from '@mui/material';
import Accordion from '../Accordion/Accordion';

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
      href: "",
      label: "Fiction",
    },
    {
      href: "",
      label: "Nonfiction"
    }
  ];

  const quickList = [
    {
      href: "",
      label: "Stores & Events"
    },
    {
      href: "",
      label: "Bestsellers"
    },
    {
      href: "",
      label: "Wishlist"
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
                    <div className="menu_SubListItem" href={sl.href} key={key}>
                      <Typography>{sl.label}</Typography>
                    </div>
                  )} />
              )
            } else if (l.subMenu && !l.icon) {
              return (
                <Accordion href={l.href} key={key} className="menu_ListItem" title={l.label} content={
                  l.subMenu.map((sl, key) =>
                    <div className="menu_SubListItem" href={sl.href} key={key}>
                      <Typography>{sl.label}</Typography>
                    </div>
                  )} />
              )
            } else {
              return (
                <div key={key} href={l.href}>
                  <div key={key} className="menu_ListItem">{l.label}</div>
                </div>
              )
            }
          })
        }
      </div>
      <div className="menu_quickLinks">
        {
          quickList.map((ql, key) => <div className="menu_QuickListItem"><Typography key={key} href={ql.href}>{ql.label}</Typography></div>)
        }
      </div>
    </div>
  );
};

export default Menu;
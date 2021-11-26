import React, {useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Menu = () => {

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

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="menu_Container">
      <div className="menu_List">
        {
          list.map((l, key) => {
            return (
              <Typography key={key} href={l.href}>
                {l.subMenu ? l.label : 
                  <div className="menu_listItemWithSubMenu">
                    <div className="menu_listItem">
                      <Typography>{l.label}</Typography>
                      <ArrowForwardIosIcon  onClick={setOpen(!isOpen)}/>
                      {
                        isOpen ? 
                          l.subMenu.map((sl, key) => 
                            <div className="menu_submenuContainer">
                              <Typography key={key}>{sl.label}</Typography>
                              <ArrowForwardIosIcon  onClick={setOpen(!isOpen)}/>
                                {
                                  isOpen ? 
                                  sl.map((l, key) => <Typography key={key}>{l.label}</Typography>) :
                                  <div/>
                                }
                            </div>
                          )  :
                          l.subMenu.map((sl) =>(<Typography>{sl.label}</Typography> ))                      
                      }
                      </div>
                  </div>}
              </Typography>
            )
          })
        }
      </div>
      <div className="menu_quickLinks">

      </div>
    </div>
  );
};

export default Menu;
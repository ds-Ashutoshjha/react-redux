import React from "react";

import { Container, NavLink, Row } from "reactstrap";
import HeaderLogo from "../../Assests/HeaderLogo.png";
import { Link } from "react-router-dom";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Food",
    path: "/food",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {


  return (
    <>
      <header className="header">
        <Container>
          <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between customMenuHeader">
            <Link to="/">
              {/* <a href='#'></a> */}
              <div className="logo">
                <img  className='logoimage'src={HeaderLogo} alt="Headerlogo" />
               <div className="Tagline"><h5>Foodie</h5></div> 
                
              </div>
            </Link>

            <div className="menu d-flex align-items-center gap-5 customHeader">
              {nav_links.map((item, index) => (
                <NavLink
                  href={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                <div className="footer submenu">{item.display}</div>
                </NavLink>
              ))}
            </div>
            <div className='nav__right d-flex align-items-center gap-4'>
            <i className='ri-shopping-basket-line' />
            </div>
           
          </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;

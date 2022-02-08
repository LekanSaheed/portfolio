import React from "react";
import "./Footer.css";
import { navLinks } from "./Header";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_main">
        <div className="footer_main_flex1 footer_main_flex ">
          <div className="imd_node">
            <h2>Quick Links</h2>
            <div className="flex-column">
              {" "}
              {navLinks.map((nav, id) => {
                return (
                  <Link
                    className="footer_links"
                    activeClass="nil"
                    key={id}
                    to={nav.to}
                    smooth
                    offset={-90}
                    spy={true}
                  >
                    {nav.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer_main_flex2 footer_main_flex">Flex 2</div>
        <div className="footer_main_flex3 footer_main_flex">Flex 3</div>
      </div>
      <div className="footer_bottom">Bottom</div>
    </div>
  );
};

export default Footer;

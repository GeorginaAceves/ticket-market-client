import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>Contact</h5>
            <div className="list-unstyled">
              <li>0750575244</li>
              <li>France</li>
              <li>aceves.georgina@hotmail.com</li>
            </div>
          </div>
          
          {/* Column3 */}
          <div className="col">
            <h5>Social Media</h5>
            <ui className="list-unstyled">
              <li>
              <a href="https://github.com/GeorginaAceves">Github</a>
              </li>
              <li>
              <a href="https://linkedin.com/in/georgina-aceves/">LinkedIn</a>
              </li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Ticket Market | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;